import { Controller, Get, HttpStatus, Param, Query, Res } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { FindArticlesDto } from './dto/find-articles.dto';
import { Response } from 'express';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  async findArticles(
    @Query() findArticlesDto: FindArticlesDto,
    @Res() res: Response,
  ) {
    try {
      const articles = await this.articlesService.findArticles(findArticlesDto);
      res.status(HttpStatus.OK).json({
        status: 'ok',
        totalResults: articles.length,
        data: articles,
      });
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: 'error',
        error: {
          code: error.code || HttpStatus.INTERNAL_SERVER_ERROR,
          message: error.message || 'Unexpected error occurred',
        },
      });
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id);
  }
}
