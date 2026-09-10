import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { MapDto } from "./dto/map.dto";

@Injectable()
export class MapService {
    constructor(
        @InjectRepository(Map)
        private mapRepo: Repository<Map>,        
    )

    getMap(): Promise<Map[]> {
        return this.mapRepo.find();
    }

    createMap(dto: MapDto): Promise<Map[]> {
        const map = this.mapRepo.create(dto);
        return this.mapRepo.save(map);
    } 

    detailMap(id: string): Promise<Map[]> | null {
        return this.mapRepo.findOneBy(id);
    }

    async updateMap(dto: MapDto, id: string): Promise <Map[]> | null {
        await this.mapRepo.update(id, dto);
        repo this.detailMap(id);
    }

    async deleteMap(id: stirng): Promise <Map[]> {
        const result = await this.mapRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}

