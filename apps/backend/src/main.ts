
import "dotenv/config";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const defaultOrigins = ['http://localhost:3000', 'http://127.0.0.1:3000'];
  const provided = process.env.CORS_ALLOWED_ORIGINS
    ? process.env.CORS_ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()).filter(Boolean)
    : [];

  app.enableCors({
    origin: provided.length ? provided : defaultOrigins,
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
