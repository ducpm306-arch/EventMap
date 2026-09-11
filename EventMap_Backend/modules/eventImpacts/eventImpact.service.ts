import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EventImpact } from "./eventImpact.model";
import { EventImpactDto } from "./dto/eventImpact.dto";

@Injectable()
export class EventImpactService {
    constructor(
        @InjectRepository(EventImpact)
        private eventImpactRepo: Repository<EventImpact>,
    ) {}

    getEvenImpact(): Promise<EventImpact[]> {
        return this.eventImpactRepo.find();
    }

    createEvenImpact(dto: EventImpactDto): Promise<EventImpact> {
        this.assertTarget(dto);
        const eventImpact = this.eventImpactRepo.create(dto);
        return this.eventImpactRepo.save(eventImpact);
    } 

    detailEvenImpact(id: string): Promise<EventImpact | null> {
        return this.eventImpactRepo.findOneBy({ id });
    }

    async updateEvenImpact(dto: EventImpactDto, id: string): Promise<EventImpact | null> {
        this.assertTarget(dto);
        await this.eventImpactRepo.update(id, dto);
        return this.detailEvenImpact(id);
    }

    private assertTarget(dto: EventImpactDto): void {
        if (!dto.item_group_id && !dto.item_id) {
            throw new BadRequestException('item_group_id hoặc item_id là bắt buộc');
        }
    }

    async deleteEvenImpact(id: string): Promise<boolean> {
        const result = await this.eventImpactRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}
