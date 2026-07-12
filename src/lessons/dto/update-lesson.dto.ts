import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class InfoCardDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsString()
  iconBgClass?: string;

  @IsOptional()
  @IsString()
  iconTextClass?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;
}

export class UpdateLessonDto {
  @IsOptional()
  @IsString()
  lessonId?: string;

  @IsOptional()
  @IsNumber()
  module?: number;

  @IsOptional()
  @IsString()
  partName?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => InfoCardDto)
  infoCards?: InfoCardDto[];

  @IsOptional()
  @IsString()
  nextLessonId?: string;

  @IsOptional()
  @IsString()
  nextLessonName?: string;

  @IsOptional()
  @IsString()
  prevLessonId?: string;

  @IsOptional()
  @IsString()
  prevLessonName?: string;
}
