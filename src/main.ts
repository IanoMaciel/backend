import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use(cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], 
        allowedHeaders: ['Content-Type', 'Authorization'], 
        credentials: true,
    }));
    await app.listen(3003);
}
bootstrap();
