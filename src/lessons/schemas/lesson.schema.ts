import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
class InfoCard {
  @Prop()
  id: string;

  @Prop()
  icon: string;

  @Prop()
  iconBgClass: string;

  @Prop()
  iconTextClass: string;

  @Prop()
  title: string;

  @Prop()
  description: string;
}

@Schema({ timestamps: true })
export class Lesson extends Document {
  @Prop({ required: true, unique: true })
  lessonId: string;

  @Prop({ required: true })
  module: number;

  @Prop({ required: true })
  partName: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ type: [InfoCard], default: [] })
  infoCards: InfoCard[];

  @Prop()
  nextLessonId?: string;

  @Prop()
  nextLessonName?: string;

  @Prop()
  prevLessonId?: string;

  @Prop()
  prevLessonName?: string;

  @Prop()
  code?: string;

  @Prop()
  codeFilename?: string;

  @Prop()
  output?: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
