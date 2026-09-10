"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
const typeorm_1 = require("typeorm");
const project_model_1 = require("../projects/project.model");
let Map = class Map {
    id;
    name;
    map_url;
    created_at;
    updated_at;
    deleted_at;
    projects;
};
exports.Map = Map;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], Map.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Map.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 'MAX', nullable: false }),
    __metadata("design:type", String)
], Map.prototype, "map_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], Map.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], Map.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: true }),
    __metadata("design:type", Object)
], Map.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_model_1.Project, (project) => project.map),
    __metadata("design:type", Array)
], Map.prototype, "projects", void 0);
exports.Map = Map = __decorate([
    (0, typeorm_1.Entity)('Maps')
], Map);
//# sourceMappingURL=map.model.js.map