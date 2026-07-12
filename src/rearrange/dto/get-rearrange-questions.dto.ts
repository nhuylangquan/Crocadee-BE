import { IsOptional, IsString } from 'class-validator';

export class GetRearrangeQuestionsDto {
  @IsOptional()
  @IsString()
  seed?: string;
}
