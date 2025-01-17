import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.FRONTEND_URL,
  });
  await app
    .listen(8000)
    .then(() => console.log('Admin is running on PORT 8000'));
}
bootstrap();
