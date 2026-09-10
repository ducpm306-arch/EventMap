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
exports.ObjectGroup = void 0;
const typeorm_1 = require("typeorm");
const project_model_1 = require("../projects/project.model");
const object_model_1 = require("../objects/object.model");
const eventImpact_model_1 = require("../eventImpacts/eventImpact.model");
let ObjectGroup = class ObjectGroup {
    id;
    name;
    color_hex;
    description;
    project_id;
    created_at;
    updated_at;
    deleted_at;
    project;
    objects;
    impacts;
};
exports.ObjectGroup = ObjectGroup;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], ObjectGroup.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], ObjectGroup.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'char', length: 7, nullable: false }),
    __metadata("design:type", String)
], ObjectGroup.prototype, "color_hex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 'MAX', nullable: false }),
    __metadata("design:type", String)
], ObjectGroup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Object)
], ObjectGroup.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], ObjectGroup.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], ObjectGroup.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: true }),
    __metadata("design:type", Object)
], ObjectGroup.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_model_1.Project, (project) => project.objectGroups, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'project_id' }),
    __metadata("design:type", Object)
], ObjectGroup.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => object_model_1.ObjectEntity, (object) => object.objectGroup),
    __metadata("design:type", Array)
], ObjectGroup.prototype, "objects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => eventImpact_model_1.EventsImpact, (impact) => impact.objectGroup),
    __metadata("design:type", Array)
], ObjectGroup.prototype, "impacts", void 0);
exports.ObjectGroup = ObjectGroup = __decorate([
    (0, typeorm_1.Entity)('ObjectGroups')
], ObjectGroup);
//# sourceMappingURL=objectGroup.model.js.map