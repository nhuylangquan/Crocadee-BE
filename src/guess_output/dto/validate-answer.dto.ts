import { IsNumber, IsString } from 'class-validator';

export class ValidateAnswerDto {
  @IsString()
  id!: string;

  @IsNumber()
  answer!: number;
}
