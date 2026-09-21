import { Account } from 'modules/accounts/account.model';
import { EventImpact } from 'modules/eventImpacts/eventImpact.model';
import { ItemGroup } from 'modules/itemGroups/itemGroup.model';
import { Item } from 'modules/items/item.model';
import { Project } from 'modules/projects/project.model';
import { DataSourceOptions } from 'typeorm';

export function databaseConfig(): DataSourceOptions {
  return {
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT ?? '3306', 10),
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '123456789',
    database: process.env.DB_NAME || 'EventMap',
    entities: [Account, Map, Project, Event, Item, ItemGroup, EventImpact],
    charset: 'utf8mb4_unicode_ci',
    synchronize: false,
  };
}
