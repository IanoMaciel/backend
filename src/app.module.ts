import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DonorsModule } from './donors/donors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'donor_db',
      entities: [join(__dirname, '**/*entity.{ts,js}')],
      synchronize: true,
    }),
    DonorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
