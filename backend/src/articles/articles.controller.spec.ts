import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesController } from './articles.controller';
import { ArticlesService } from './articles.service';
import { HttpException } from '@nestjs/common';

describe('ArticlesController', () => {
  let controller: ArticlesController;
  let service: ArticlesService;

  beforeEach(async () => {
    // Create a mock ArticlesService
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesController],
      providers: [
        {
          provide: ArticlesService,
          useValue: {
            findArticles: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<ArticlesController>(ArticlesController);
    service = module.get<ArticlesService>(ArticlesService);
  });

  it('should return an array of articles', async () => {
    const mockArticles = [
      {
        title: 'Article 1',
        source: { name: 'Source 1' },
        description: 'Description 1',
        urlToImage: 'Image 1',
        publishedAt: '2021-01-01T00:00:00Z',
        url: 'URL 1',
      },
      {
        title: 'Article 2',
        source: { name: 'Source 2' },
        description: 'Description 2',
        urlToImage: 'Image 2',
        publishedAt: '2021-01-02T00:00:00Z',
        url: 'URL 2',
      },
    ];

    jest.spyOn(service, 'findArticles').mockResolvedValue(mockArticles);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const dto = {
      query: 'query',
      from: '2021-01-01',
      to: '2021-01-02',
      sortBy: 'publishedAt',
      pageSize: 10,
    };
    await controller.findArticles(dto, mockResponse as any);

    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'ok',
      totalResults: mockArticles.length,
      articles: mockArticles,
    });
  });

  it('should handle errors when service fails', async () => {
    const error = new HttpException('Service Failure', 500);
    jest.spyOn(service, 'findArticles').mockRejectedValue(error);

    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const dto = {
      query: 'query',
      from: '2021-01-01',
      to: '2021-01-02',
      sortBy: 'publishedAt',
      pageSize: 10,
    };

    await controller.findArticles(dto, mockResponse as any);

    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.json).toHaveBeenCalledWith({
      status: 'error',
      error: {
        code: 500,
        message: 'Service Failure',
      },
    });
  });
});
