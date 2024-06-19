import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { DonorsModule } from './donors/donors.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: 'postgres://yaucqlgw:MYJpo9ktlx7qBpxUNYDLPpN7kzSUXJ6I@silly.db.elephantsql.com/yaucqlgw',
      synchronize: true,
      autoLoadEntities: true,
    }),
    DonorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Permitir apenas solicitações deste domínio
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true'); // Permitir credenciais (cookies, tokens, etc)
        next();
      })
      .forRoutes('*'); // Aplicar CORS em todas as rotas
  }
}
