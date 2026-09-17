import { PartialType } from '@nestjs/swagger';
import { CreateEventImpactDto } from './create_eventImpact.dto';

export class UpdateEventImpactDto extends PartialType(CreateEventImpactDto) {}
