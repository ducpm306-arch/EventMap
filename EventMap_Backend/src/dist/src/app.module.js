"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const task_module_1 = require("./modules/tasks/task.module");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./modules/auth/auth.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
const account_model_1 = require("../modules/accounts/account.model");
const map_model_1 = require("../modules/maps/map.model");
const project_model_1 = require("../modules/projects/project.model");
const event_model_1 = require("../modules/events/event.model");
const object_model_1 = require("../modules/objects/object.model");
const objectGroup_model_1 = require("../modules/objectGroups/objectGroup.model");
const eventImpact_model_1 = require("../modules/eventImpacts/eventImpact.model");
const account_module_1 = require("../modules/accounts/account.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mssql',
                host: process.env.DB_HOST || 'localhost',
                port: parseInt(process.env.DB_PORT) || 1433,
                username: process.env.DB_USERNAME || 'root',
                password: process.env.DB_PASSWORD || '123456789',
                database: process.env.DB_NAME || 'EventMap',
                entities: [account_model_1.Account, map_model_1.Map, project_model_1.Project, event_model_1.Event, object_model_1.ObjectEntity, objectGroup_model_1.ObjectGroup, eventImpact_model_1.EventsImpact],
                options: {
                    trustServerCertificate: true,
                },
                synchronize: false,
            }),
            task_module_1.TaskModule,
            auth_module_1.AuthModule,
            account_module_1.AccountModule,
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [{ ttl: 60000, limit: 10 }],
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            { provide: core_1.APP_GUARD, useClass: throttler_1.ThrottlerGuard },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map