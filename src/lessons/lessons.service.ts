import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Lesson } from './schemas/lesson.schema';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lesson.name) private lessonModel: Model<Lesson>) {}

  async create(createLessonDto: CreateLessonDto): Promise<Lesson> {
    const createdLesson = new this.lessonModel(createLessonDto);
    return createdLesson.save();
  }

  async findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().sort({ module: 1 }).exec();
  }

  async findOne(lessonId: string): Promise<Lesson> {
    const lesson = await this.lessonModel.findOne({ lessonId }).exec();
    if (!lesson) {
      throw new NotFoundException(`Lesson with ID ${lessonId} not found`);
    }
    return lesson;
  }

  async update(
    lessonId: string,
    updateLessonDto: UpdateLessonDto,
  ): Promise<Lesson> {
    const existingLesson = await this.lessonModel
      .findOneAndUpdate({ lessonId }, updateLessonDto, { new: true })
      .exec();
    if (!existingLesson) {
      throw new NotFoundException(`Lesson with ID ${lessonId} not found`);
    }
    return existingLesson;
  }

  async remove(lessonId: string): Promise<any> {
    const deletedLesson = await this.lessonModel
      .findOneAndDelete({ lessonId })
      .exec();
    if (!deletedLesson) {
      throw new NotFoundException(`Lesson with ID ${lessonId} not found`);
    }
    return deletedLesson;
  }

  async seedData(): Promise<any> {
    const initialData = [
      {
        lessonId: 'intro',
        module: 1,
        partName: 'INTRODUCTION',
        title: 'Welcome to C++',
        description:
          "Embark on your journey into the world of high-performance computing. <strong>C++ is a powerful, fast, and versatile programming language</strong> used to build operating systems, game engines, and critical infrastructure. In this path, you'll master everything from <strong>basic syntax</strong> to <strong>advanced memory management</strong>. Let's write your first line of code!",
        infoCards: [
          {
            id: 'why-cpp',
            icon: '💪',
            iconBgClass: 'bg-purple-50',
            iconTextClass: 'text-[#6C63FF]',
            title: 'Why C++?',
            description:
              "C++ gives you unparalleled control over system resources and memory. It's the language of choice when performance is non-negotiable.",
          },
          {
            id: 'metal',
            icon: '⚙️',
            iconBgClass: 'bg-orange-50',
            iconTextClass: 'text-orange-500',
            title: 'Close to the Metal',
            description:
              'Unlike many modern languages, C++ compiles directly to machine code, making it incredibly fast and efficient to execute.',
          },
        ],
        nextLessonId: 'basics',
        nextLessonName: 'C++ Basics',
        codeFilename: 'hello_world.cpp',
        code: `#include <iostream>

int main() {
    // This is your first C++ program
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
        output: '> Hello, World!',
      },
      {
        lessonId: 'basics',
        module: 2,
        partName: 'BASICS',
        title: 'C++ Basics',
        description:
          "Learn the fundamental building blocks of C++ programming. We'll cover data types, input/output, and the structure of a C++ program.",
        nextLessonId: 'variable',
        nextLessonName: 'Variable',
        prevLessonId: 'intro',
        prevLessonName: 'Welcome to C++',
        codeFilename: 'basics.cpp',
        code: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ Programming!" << std::endl;
    return 0;
}`,
        output: '> Welcome to C++ Programming!',
      },
      {
        lessonId: 'variable',
        module: 3,
        partName: 'VARIABLES',
        title: 'Variables & Data Types',
        description:
          'Variables are containers for storing data values. In C++, there are different types of variables (defined with different keywords).',
        nextLessonId: 'condition',
        nextLessonName: 'Condition',
        prevLessonId: 'basics',
        prevLessonName: 'C++ Basics',
        codeFilename: 'variables.cpp',
        code: `#include <iostream>
#include <string>

int main() {
    int age = 20;
    double score = 8.5;
    std::string name = "Alex";
    bool isPassed = true;

    std::cout << "Name: " << name << ", Age: " << age << ", Score: " << score << std::endl;
    return 0;
}`,
        output: '> Name: Alex, Age: 20, Score: 8.5',
      },
      {
        lessonId: 'condition',
        module: 4,
        partName: 'CONTROL FLOW',
        title: 'Conditionals',
        description:
          'C++ supports the usual logical conditions from mathematics. You can use these conditions to perform different actions for different decisions.',
        nextLessonId: 'loop',
        nextLessonName: 'Loop',
        prevLessonId: 'variable',
        prevLessonName: 'Variable',
        codeFilename: 'conditionals.cpp',
        code: `#include <iostream>

int main() {
    int score = 8;
    if (score >= 5) {
        std::cout << "Passed" << std::endl;
    } else {
        std::cout << "Failed" << std::endl;
    }
    return 0;
}`,
        output: '> Passed',
      },
      {
        lessonId: 'loop',
        module: 5,
        partName: 'CONTROL FLOW',
        title: 'Loops',
        description:
          'Loops can execute a block of code as long as a specified condition is reached. They are handy because they save time, reduce errors, and make code more readable.',
        nextLessonId: 'function',
        nextLessonName: 'Function',
        prevLessonId: 'condition',
        prevLessonName: 'Condition',
        codeFilename: 'loops.cpp',
        code: `#include <iostream>

int main() {
    for (int i = 0; i < 3; i++) {
        std::cout << "Iteration: " << i << std::endl;
    }
    return 0;
}`,
        output: '> Iteration: 0\nIteration: 1\nIteration: 2',
      },
      {
        lessonId: 'function',
        module: 6,
        partName: 'FUNCTIONS',
        title: 'Functions',
        description:
          'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.',
        nextLessonId: 'array',
        nextLessonName: 'Array',
        prevLessonId: 'loop',
        prevLessonName: 'Loop',
        codeFilename: 'functions.cpp',
        code: `#include <iostream>

int add(int a, int b) {
    return a + b;
}

int main() {
    int total = add(2, 3);
    std::cout << "Total: " << total << std::endl;
    return 0;
}`,
        output: '> Total: 5',
      },
      {
        lessonId: 'array',
        module: 7,
        partName: 'DATA STRUCTURES',
        title: 'Arrays',
        description:
          'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.',
        nextLessonId: 'pointer',
        nextLessonName: 'Pointer',
        prevLessonId: 'function',
        prevLessonName: 'Function',
        codeFilename: 'arrays.cpp',
        code: `#include <iostream>

int main() {
    int scores[3] = {8, 9, 10};
    std::cout << "First score: " << scores[0] << std::endl;
    std::cout << "Third score: " << scores[2] << std::endl;
    return 0;
}`,
        output: '> First score: 8\nThird score: 10',
      },
      {
        lessonId: 'pointer',
        module: 8,
        partName: 'MEMORY',
        title: 'Pointers',
        description:
          'A pointer is a variable that stores the memory address of another variable as its value. A pointer variable points to a data type (like int) of the same type.',
        prevLessonId: 'array',
        prevLessonName: 'Array',
        codeFilename: 'pointers.cpp',
        code: `#include <iostream>

int main() {
    int number = 10;
    int* numberPointer = &number;
    std::cout << "Value: " << *numberPointer << std::endl;
    return 0;
}`,
        output: '> Value: 10',
      },
    ];

    await this.lessonModel.deleteMany({});
    return this.lessonModel.insertMany(initialData);
  }
}
