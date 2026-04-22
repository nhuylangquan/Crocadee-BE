import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Demo } from './demo.schema';

@Injectable()
export class DemoService {
  constructor(@InjectModel(Demo.name) private demoModel: Model<Demo>) {}

  async getPreCreatedData() {
    return await this.demoModel.find().exec();
  }
}
