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
exports.Project = void 0;
const typeorm_1 = require("typeorm");
const account_model_1 = require("../accounts/account.model");
const map_model_1 = require("../maps/map.model");
const event_model_1 = require("../events/event.model");
const object_model_1 = require("../objects/object.model");
const objectGroup_model_1 = require("../objectGroups/objectGroup.model");
let Project = class Project {
    id;
    name;
    description;
    map_id;
    account_id;
    created_at;
    updated_at;
    deleted_at;
    map;
    account;
    events;
    objects;
    objectGroups;
};
exports.Project = Project;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], Project.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 200, nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'nvarchar', length: 'MAX', nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "map_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false }),
    __metadata("design:type", String)
], Project.prototype, "account_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], Project.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], Project.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: true }),
    __metadata("design:type", Object)
], Project.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => map_model_1.Map, (map) => map.projects),
    (0, typeorm_1.JoinColumn)({ name: 'map_id' }),
    __metadata("design:type", map_model_1.Map)
], Project.prototype, "map", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => account_model_1.Account, (account) => account.projects),
    (0, typeorm_1.JoinColumn)({ name: 'account_id' }),
    __metadata("design:type", account_model_1.Account)
], Project.prototype, "account", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => event_model_1.Event, (event) => event.project),
    __metadata("design:type", Array)
], Project.prototype, "events", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => object_model_1.ObjectEntity, (object) => object.project),
    __metadata("design:type", Array)
], Project.prototype, "objects", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => objectGroup_model_1.ObjectGroup, (group) => group.project),
    __metadata("design:type", Array)
], Project.prototype, "objectGroups", void 0);
exports.Project = Project = __decorate([
    (0, typeorm_1.Entity)('Projects')
], Project);
//# sourceMappingURL=project.model.js.map