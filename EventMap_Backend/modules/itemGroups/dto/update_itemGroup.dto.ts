import { PartialType } from '@nestjs/swagger';
import { CreateItemGroupDto } from './create_itemGroup.dto';

export class UpdateItemGroupDto extends PartialType(CreateItemGroupDto) {}
