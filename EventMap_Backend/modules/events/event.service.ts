import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create_event.dto';
import { Event } from './event.model';
import { UpdateEventDto } from './dto/update_event.dto';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepo: Repository<Event>,
  ) {}

  getEvent(): Promise<Event[]> {
    return this.eventRepo.find();
  }

  createEvent(dto: CreateEventDto): Promise<Event> {
    const event = this.eventRepo.create(dto);
    return this.eventRepo.save(event);
  }

  detailEvent(id: string): Promise<Event | null> {
    return this.eventRepo.findOneBy({ id });
  }

  async updateEvent(dto: UpdateEventDto, id: string): Promise<Event | null> {
    await this.eventRepo.update(id, dto);
    return this.detailEvent(id);
  }

  async deleteEvent(id: string): Promise<boolean> {
    const result = await this.eventRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
