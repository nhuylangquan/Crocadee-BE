import {
  IsString,
  IsNumber,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class InfoCardDto {
  @IsString()
  id: string;

  @IsString()
  icon: string;

  @IsString()
  iconBgClass: string;

  @IsString()
  iconTextClass: string;

  @IsString()
  title: string;

  @IsString()
  description: string;
}

export class CreateLessonDto {
  @IsString()
  lessonId: string;

  @IsNumber()
  module: number;

  @IsString()
  partName: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

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
