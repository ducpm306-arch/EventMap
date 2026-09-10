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
exports.EventsImpact = void 0;
const typeorm_1 = require("typeorm");
const event_model_1 = require("../events/event.model");
const objectGroup_model_1 = require("../objectGroups/objectGroup.model");
const object_model_1 = require("../objects/object.model");
let EventsImpact = class EventsImpact {
    id;
    event_id;
    object_group_id;
    object_id;
    created_at;
    updated_at;
    deleted_at;
    event;
    objectGroup;
    object;
};
exports.EventsImpact = EventsImpact;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", String)
], EventsImpact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: false }),
    __metadata("design:type", String)
], EventsImpact.prototype, "event_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Object)
], EventsImpact.prototype, "object_group_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', nullable: true }),
    __metadata("design:type", Object)
], EventsImpact.prototype, "object_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], EventsImpact.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: false, default: () => 'SYSUTCDATETIME()' }),
    __metadata("design:type", Date)
], EventsImpact.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime2', nullable: true }),
    __metadata("design:type", Object)
], EventsImpact.prototype, "deleted_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_model_1.Event, (event) => event.impacts),
    (0, typeorm_1.JoinColumn)({ name: 'event_id' }),
    __metadata("design:type", event_model_1.Event)
], EventsImpact.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => objectGroup_model_1.ObjectGroup, (group) => group.impacts, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'object_group_id' }),
    __metadata("design:type", Object)
], EventsImpact.prototype, "objectGroup", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => object_model_1.ObjectEntity, (object) => object.impacts, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'object_id' }),
    __metadata("design:type", Object)
], EventsImpact.prototype, "object", void 0);
exports.EventsImpact = EventsImpact = __decorate([
    (0, typeorm_1.Entity)('EventsImpacts')
], EventsImpact);
//# sourceMappingURL=eventImpact.model.js.map