import { Type } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsNumber,
  Min,
  Max,
  Length,
} from 'class-validator';

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

  @IsNumber()
  @Min(1)
  @Max(100)
  @Type(() => Number)
  pageSize?: number;
}
