import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AccountModule } from '../modules/accounts/account.module';
import { EventImpactsModule } from '../modules/eventImpacts/eventImpact.module';
import { EventModule } from '../modules/events/event.module';
import { MapModule } from '../modules/maps/map.module';
import { ItemGroupModule } from '../modules/itemGroups/itemGroup.module';
import { ItemModule } from '../modules/items/item.module';
import { ProjectModule } from '../modules/projects/project.module';
import { databaseConfig } from './database.config';
import { AuthModule } from 'modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ useFactory: () => databaseConfig() }),
    AccountModule,
    EventImpactsModule,
    EventModule,
    MapModule,
    ItemGroupModule,
    ItemModule,
    ProjectModule,
    AuthModule,
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 10 }],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
