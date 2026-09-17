import { PartialType } from '@nestjs/swagger';
import { CreateItemDto } from './create_item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
