import { PartialType } from '@nestjs/swagger';
import { CreateMapDto } from './create_map.dto';

export class UpdateMapDto extends PartialType(CreateMapDto) {}
