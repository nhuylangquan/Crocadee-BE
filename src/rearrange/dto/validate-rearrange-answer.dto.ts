import { IsArray, IsString } from 'class-validator';

export class ValidateRearrangeAnswerDto {
  @IsString()
  id!: string;

  @IsArray()
  @IsString({ each: true })
  lines!: string[];
}
