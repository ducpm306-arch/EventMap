import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create_event.dto';
import { UpdateEventDto } from './dto/update_event.dto';

@Controller('events')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Get()
  getEvent() {
    return this.eventService.getEvent();
  }

  @Post()
  createEvent(@Body() dto: CreateEventDto) {
    return this.eventService.createEvent(dto);
  }

  @Get('/:id')
  detailEvent(@Param('id') id: string) {
    return this.eventService.detailEvent(id);
  }

  @Put('/:id')
  updateEvent(@Body() dto: UpdateEventDto, @Param('id') id: string) {
    return this.eventService.updateEvent(dto, id);
  }

  @Delete('/:id')
  deleteEvent(@Param('id') id: string) {
    return this.eventService.deleteEvent(id);
  }
}
