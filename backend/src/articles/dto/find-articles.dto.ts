// src/news/dto/find-news.dto.ts
import { IsOptional, IsString, Length } from 'class-validator';

export class FindArticlesDto {
  @IsString()
  @Length(3, 500)
  query: string;

  @IsString()
  @IsOptional()
  from?: string;

  @IsString()
  @IsOptional()
  to?: string;

  @IsString()
  @IsOptional()
  sortBy?: string;
}
