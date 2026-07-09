import { IsOptional, IsString } from 'class-validator';

export class GetQuestionsDto {
  @IsOptional()
  @IsString()
  seed?: string;
}
