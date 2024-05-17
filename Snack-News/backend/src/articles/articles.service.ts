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
    const { query, from, to, sortBy, pageSize } = findArticlesDto;

    // Create a new URLSearchParams object
    const params = new URLSearchParams();

    // Append parameters only if they are defined
    if (query) params.append('q', query);
    if (from) params.append('from', from);
    if (to) params.append('to', to);
    if (sortBy) params.append('sortBy', sortBy);
    if (pageSize) params.append('pageSize', pageSize.toString());

    // Always add apiKey and pageSize since these are likely required
    params.append('apiKey', apiKey);

    // Construct the final URL with the endpoint and the serialized parameters
    const url = `${endpoint}/everything?${params.toString()}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(url).pipe(
          catchError((error: AxiosError) => {
            throw new Error('Error fetching articles');
          }),
        ),
      );
      // Here, you process the fetched data into the desired format.
      const data = response.data.articles;
      const articles: Article[] = data.map((article: Article) => ({
        title: article.title,
        source: {
          name: article.source.name,
        },
        description: article.description,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        url: article.url,
      }));

      return articles; // Return the processed list of articles
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }
}
