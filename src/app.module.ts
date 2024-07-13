import { HttpModule, HttpService } from '@nestjs/axios';
import * as joi from 'joi';

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/modules/users.module';
import { OrdersModule } from './orders/modules/orders.module';
import { lastValueFrom } from 'rxjs';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { environment } from './config/enviroments';
import config from './config/config';

const API_TASK = 'https://jsonplaceholder.typicode.com/todos';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: joi.object({
        API_KEY: joi.number().required(),
        DATABASE_NAME: joi.string().required(), //
        PORT: joi.number().required(),
      }),
    }),
    HttpModule,
    UsersModule,
    OrdersModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'TASKS',
      useFactory: async (http: HttpService) => {
        const request = http.get(API_TASK);
        const tasks = await lastValueFrom(request);
        return tasks.data;
      },
      inject: [HttpService],
    },
  ],
  exports: [ConfigModule],
})
export class AppModule {}
