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
exports.Object = exports.ObjectEntity = void 0;
const typeorm_1 = require("typeorm");
const objectGroup_model_1 = require("../objectGroups/objectGroup.model");
const project_model_1 = require("../projects/project.model");
const eventImpact_model_1 = require("../eventImpacts/eventImpact.model");
let ObjectEntity = class ObjectEntity {
    id;
    name;
    boundary;
    description;
    object_group_id;
    project_id;
    created_at;
    updated_at;
    deleted_at;
    objectGroup;
    project;
    impacts;
};
exports.ObjectEntity = ObjectEntity;
exports.Object = ObjectEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 'MAX', nullable: false }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "boundary", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 'MAX', nullable: false }),
    __metadata("design:type", String)
], ObjectEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Object)
], ObjectEntity.prototype, "object_group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false }),
    __metadata("design:type", Object)
], ObjectEntity.prototype, "project_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], ObjectEntity.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], ObjectEntity.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: true }),
    __metadata("design:type", Object)
], ObjectEntity.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => objectGroup_model_1.ObjectGroup, (group) => group.objects, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'object_group_id' }),
    __metadata("design:type", Object)
], ObjectEntity.prototype, "objectGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_model_1.Project, (project) => project.objects, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'project_id' }),
    __metadata("design:type", Object)
], ObjectEntity.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => eventImpact_model_1.EventsImpact, (impact) => impact.object),
    __metadata("design:type", Array)
], ObjectEntity.prototype, "impacts", void 0);
exports.Object = exports.ObjectEntity = ObjectEntity = __decorate([
    (0, typeorm_1.Entity)('Objects')
], ObjectEntity);
//# sourceMappingURL=object.model.js.map