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
exports.IsUniqueConstraint = void 0;
exports.IsUnique = IsUnique;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let IsUniqueConstraint = class IsUniqueConstraint {
    dataSource;
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async validate(value, args) {
        if (value === null || value === undefined || value === '') {
            return true;
        }
        const [entity, field] = args.constraints;
        const repository = this.dataSource.getRepository(entity);
        const column = field ?? args.property;
        const record = await repository.findOne({
            where: { [column]: value },
        });
        return !record;
    }
    defaultMessage(args) {
        return `${args.property} đã tồn tại`;
    }
};
exports.IsUniqueConstraint = IsUniqueConstraint;
exports.IsUniqueConstraint = IsUniqueConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ async: true }),
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], IsUniqueConstraint);
function IsUnique(entity, field, validationOptions) {
    return (object, propertyName) => {
        (0, class_validator_1.registerDecorator)({
            target: object.constructor,
            propertyName: propertyName.toString(),
            options: validationOptions,
            constraints: [entity, field],
            validator: IsUniqueConstraint,
        });
    };
}
//# sourceMappingURL=unique.validator.js.map