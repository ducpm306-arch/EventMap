"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectModule = void 0;
const common_1 = require("@nestjs/common");
const object_controller_1 = require("./object.controller");
const object_service_1 = require("./object.service");
const typeorm_1 = require("@nestjs/typeorm");
const object_model_1 = require("./object.model");
let ObjectModule = class ObjectModule {
};
exports.ObjectModule = ObjectModule;
exports.ObjectModule = ObjectModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([object_model_1.Object])],
        controllers: [object_controller_1.ObjectController],
        providers: [object_service_1.ObjectService],
    })
], ObjectModule);
//# sourceMappingURL=object.module.js.map