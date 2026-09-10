"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventImpactsModule = void 0;
const common_1 = require("@nestjs/common");
const eventImpact_controller_1 = require("./eventImpact.controller");
const eventImpact_service_1 = require("./eventImpact.service");
const typeorm_1 = require("@nestjs/typeorm");
const eventImpact_model_1 = require("./eventImpact.model");
let EventImpactsModule = class EventImpactsModule {
};
exports.EventImpactsModule = EventImpactsModule;
exports.EventImpactsModule = EventImpactsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([eventImpact_model_1.EventsImpact])],
        controllers: [eventImpact_controller_1.EvenImpactController],
        providers: [eventImpact_service_1.EventImpactService],
    })
], EventImpactsModule);
//# sourceMappingURL=eventImpact.module.js.map