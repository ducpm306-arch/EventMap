import { PartialType } from '@nestjs/swagger';
import { CreateEventDto } from './create_event.dto';

export class UpdateEventDto extends PartialType(CreateEventDto) {}
