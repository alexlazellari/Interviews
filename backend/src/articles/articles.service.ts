import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { FindArticlesDto } from './dto/find-articles.dto';
import { Article } from './entities/article.entity';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findArticles(findArticlesDto: FindArticlesDto): Promise<Article[]> {
    const apiKey = this.configService.get<string>('NEWS_API_KEY');
    const endpoint = this.configService.get<string>('NEWS_API_ENDPOINT');
    const { query, from, to, sortBy } = findArticlesDto;

    const url = `${endpoint}/everything?q=${query}&from=${from}&to=${to}&sortBy=${sortBy}&apiKey=${apiKey}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(url).pipe(
          catchError((error: AxiosError) => {
            console.error('Failed to fetch articles:', error.message);
            throw new Error('Error fetching articles');
          }),
        ),
      );
      // Here, you process the fetched data into the desired format.
      const data = response.data.articles;
      const articles: Article[] = data.map((article: Article) => ({
        title: article.title,
        sourceName: article.source.name,
        description: article.description,
        imageUrl: article.urlToImage,
        publishedAt: article.publishedAt,
        articleUrl: article.url,
      }));

      return articles; // Return the processed list of articles
    } catch (error) {
      console.error('Error in findArticles method:', error);
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }
}
