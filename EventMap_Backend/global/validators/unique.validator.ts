import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import {
  DataSource,
  EntityTarget,
  FindOptionsWhere,
  ObjectLiteral,
} from 'typeorm';

type IsUniqueConstraints = [EntityTarget<ObjectLiteral>, string | undefined];

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(private readonly dataSource: DataSource) {}

  async validate(value: unknown, args: ValidationArguments): Promise<boolean> {
    if (value === null || value === undefined || value === '') {
      return true;
    }

    const [entity, field] = args.constraints as IsUniqueConstraints;
    const repository = this.dataSource.getRepository(entity);
    const column = field ?? args.property;
    const record = await repository.findOne({
      where: { [column]: value } as FindOptionsWhere<ObjectLiteral>,
    });

    return !record;
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} đã tồn tại`;
  }
}

export function IsUnique(
  entity: EntityTarget<ObjectLiteral>,
  field?: string,
  validationOptions?: ValidationOptions,
): PropertyDecorator {
  return (object: object, propertyName: string | symbol) => {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName.toString(),
      options: validationOptions,
      constraints: [entity, field] satisfies IsUniqueConstraints,
      validator: IsUniqueConstraint,
    });
  };
}
