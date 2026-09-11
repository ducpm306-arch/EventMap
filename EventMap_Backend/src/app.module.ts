import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { Account } from '../modules/accounts/account.model';
import { Map } from '../modules/maps/map.model';
import { Project } from '../modules/projects/project.model';
import { Event } from '../modules/events/event.model';
import { Item } from '../modules/items/item.model';
import { ItemGroup } from '../modules/itemGroups/itemGroup.model';
import { EventImpact } from '../modules/eventImpacts/eventImpact.model';
import { AccountModule } from '../modules/accounts/account.module';
import { EventImpactsModule } from '../modules/eventImpacts/eventImpact.module';
import { EventModule } from '../modules/events/event.module';
import { MapModule } from '../modules/maps/map.module';
import { ItemGroupModule } from '../modules/itemGroups/itemGroup.module';
import { ItemModule } from '../modules/items/item.module';
import { ProjectModule } from '../modules/projects/project.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
      type: 'mssql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT ?? '1433', 10),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '123456789',
      database: process.env.DB_NAME || 'EventMap',
      entities: [Account, Map, Project, Event, Item, ItemGroup, EventImpact],
      options: {
        trustServerCertificate: true,
      },
      synchronize: false,
  }),
    AccountModule,
    EventImpactsModule,
    EventModule,
    MapModule,
    ItemGroupModule,
    ItemModule,
    ProjectModule,
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
