import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesService } from './articles.service';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { of, throwError } from 'rxjs'; // Import the 'of' function from 'rxjs'
import { AxiosResponse } from 'axios';
import { HttpException } from '@nestjs/common';

describe('ArticlesService', () => {
  let service: ArticlesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'NEWS_API_KEY') return 'fake_api_key';
              if (key === 'NEWS_API_ENDPOINT') return 'https://fakeapi.com';
            }),
          },
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(() => ({
              pipe: jest.fn(),
            })),
          },
        },
      ],
    }).compile();

    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should fetch articles', async () => {
    // Mock the response from the HTTP request
    const mockResponse = {
      status: 'ok',
      totalResults: 1,
      articles: [
        {
          source: {
            name: 'Source 1',
          },
          author: 'Author 1',
          title: 'Article 1',
          description: 'Description 1',
          url: 'URL 1',
          urlToImage: 'URL to Image 1',
          publishedAt: 'Published At 1',
          content: 'Content 1',
        },
      ],
    };

    // Mock the get method of the HttpService
    jest.spyOn(service['httpService'], 'get').mockReturnValue(
      of({
        data: mockResponse,
      } as AxiosResponse<unknown, any>),
    );

    // Mock parameters for the findArticles method

    const findArticlesDto = {
      query: 'test',
      from: '2021-01-01',
      to: '2021-01-02',
      sortBy: 'publishedAt',
    };

    // Call the findArticles method
    const articles = await service.findArticles(findArticlesDto);

    // Check if the articles are fetched correctly
    expect(articles).toEqual([
      {
        title: 'Article 1',
        source: {
          name: 'Source 1',
        },
        description: 'Description 1',
        urlToImage: 'URL to Image 1',
        publishedAt: 'Published At 1',
        url: 'URL 1',
      },
    ]);
  });

  it('should handle errors when fetching articles', async () => {
    const mockGet = jest
      .spyOn(service['httpService'], 'get')
      .mockReturnValue(throwError(() => new Error('Failed to fetch articles')));

    const findArticlesDto = {
      query: 'test',
      from: '2021-01-01',
      to: '2021-01-02',
      sortBy: 'publishedAt',
    };

    try {
      await expect(service.findArticles(findArticlesDto)).rejects.toThrow(
        'Error fetching articles',
      );

      expect(mockGet).toHaveBeenCalled();
    } finally {
      mockGet.mockRestore();
    }
  });
});
