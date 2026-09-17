import { PartialType } from '@nestjs/swagger';

export class UpdateEventDto extends PartialType(CreateEventDto) {}
