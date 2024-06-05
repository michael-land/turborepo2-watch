import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

const app = await NestFactory.create(AppModule, {
  bufferLogs: true,
});

await app.listen(5001);

console.log(`🚀 app ready`);
