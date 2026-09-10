import { ValidationOptions, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { DataSource, EntityTarget, ObjectLiteral } from 'typeorm';
export declare class IsUniqueConstraint implements ValidatorConstraintInterface {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    validate(value: unknown, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsUnique(entity: EntityTarget<ObjectLiteral>, field?: string, validationOptions?: ValidationOptions): PropertyDecorator;
