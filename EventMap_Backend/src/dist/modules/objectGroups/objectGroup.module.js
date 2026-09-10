"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectGroupModule = void 0;
const common_1 = require("@nestjs/common");
const objectGroup_controller_1 = require("./objectGroup.controller");
const typeorm_1 = require("@nestjs/typeorm");
const objectGroup_model_1 = require("./objectGroup.model");
const objectGroup_service_1 = require("./objectGroup.service");
let ObjectGroupModule = class ObjectGroupModule {
};
exports.ObjectGroupModule = ObjectGroupModule;
exports.ObjectGroupModule = ObjectGroupModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([objectGroup_model_1.ObjectGroup])],
        controllers: [objectGroup_controller_1.ObjectGroupController],
        providers: [objectGroup_service_1.ObjectGroupService],
    })
], ObjectGroupModule);
//# sourceMappingURL=objectGroup.module.js.map