import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'nightmare';

@Schema({ collection: 'rearrange_questions' })
export class RearrangeQuestion extends Document {
  @Prop({ required: true })
  q!: string;

  @Prop({ required: true, type: [String] })
  lines!: string[];

  @Prop({ required: true, enum: ['easy', 'medium', 'hard', 'nightmare'] })
  difficulty!: Difficulty;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const RearrangeQuestionSchema =
  SchemaFactory.createForClass(RearrangeQuestion);
