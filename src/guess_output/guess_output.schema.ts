import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'nightmare';

@Schema({ collection: 'questions' })
export class Question extends Document {
  @Prop({ required: true })
  q!: string;

  @Prop({ type: Object, required: true })
  o!: { a: string; b: string; c: string; d: string };

  @Prop({ required: true })
  c!: number;

  @Prop({ required: true })
  ex!: string;

  @Prop({ required: true, enum: ['easy', 'medium', 'hard', 'nightmare'] })
  difficulty!: Difficulty;

  @Prop({ default: Date.now })
  createdAt!: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
