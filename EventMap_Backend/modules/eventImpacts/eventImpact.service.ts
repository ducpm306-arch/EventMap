import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventsImpact } from "./eventImpact.model";
import { EventImpactDto } from "./dto/eventImpact.dto";

@Injectable()
export class EventImpactService {
    constructor(
        @InjectRepository(EventImpact)
        private eventImpactRepo: Repository<EventImpact>,
    ) {}

    getEvenImpact(): Promise<EventsImpact[]> {
        return this.eventImpactRepo.find();
    }

    createEvenImpact(dto: EventImpactDto): Promise<EventImpactDto> {
        const eventImpact = this.eventImpactRepo.create(dto);
        return this.eventImpactRepo.save(eventImpact);
    } 

    detailEvenImpact(id: string): Promise<EventsImpact | null> {
        return this.eventImpactRepo.findOneBy(id);
    }

    async updateEvenImpact(dto: EventImpactDto, id: string): Promise<EventImpact | null> {
        await this.eventImpactRepo.update(id, dto);
        return this.detailEvenImpact(id);
    }

    async deleteEvenImpact(id: string): Promise<boolean> {
        const result = await this.eventImpactRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}