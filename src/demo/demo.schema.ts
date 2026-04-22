import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ collection: 'demo' })
export class Demo extends Document {
  @Prop()
  message!: string;

  @Prop()
  status!: string;
}

export const DemoSchema = SchemaFactory.createForClass(Demo);
