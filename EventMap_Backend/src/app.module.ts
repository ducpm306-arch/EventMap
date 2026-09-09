import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './modules/tasks/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { Account } from '../models/account.model';
import { Map } from '../models/map.model';
import { Project } from '../models/project.model';
import { Event } from '../models/event.model';
import { ObjectEntity } from '../models/object.model';
import { ObjectGroup } from '../models/objectGroup.model';
import { EventsImpact } from '../models/eventImpact.model';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 1433,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '123456789',
      database: process.env.DB_NAME || 'EventMap',
      entities: [Account, Map, Project, Event, ObjectEntity, ObjectGroup, EventsImpact],
      options: {
        trustServerCertificate: true,
      },
      synchronize: false,
  }),
    TaskModule,
    AuthModule,
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 10 }],
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
})
export class AppModule {}
