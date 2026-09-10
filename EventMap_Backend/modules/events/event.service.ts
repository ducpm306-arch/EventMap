import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EventDto } from "./dto/event.dto";

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private eventRepo: Repository<Event>,
    )

    getEvent(): Promise<Event[]> {
        return this.eventRepo.find();
    }

    createEvent(dto: EventDto): Promise<Event[]> {
        const event = this.eventRepo.create(dto);
        return this.eventRepo.save(event);
    }

    detailEvent(id: string): Promise<Event[]> | null {
        return this.eventRepo.findOneBy(id);
    }

    async updateEvent(dto: EventDto, id: string): Promise<Event[] | null> {
        await this.eventRepo.update(id, dto);
        return this.detailEvent(id);
    }

    async deleteEvent(id: string): Promise<Event[]> {
        const result = await this.eventRepo.delete(id); 
        return (result.affected ?? 0) > 0;
    }
}