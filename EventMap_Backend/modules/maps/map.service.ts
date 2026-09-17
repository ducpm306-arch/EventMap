import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMapDto } from './dto/create_map.dto';
import { UpdateMapDto } from './dto/update_map.dto';
import { Map } from './map.model';

@Injectable()
export class MapService {
  constructor(
    @InjectRepository(Map)
    private mapRepo: Repository<Map>,
  ) {}

  getMap(): Promise<Map[]> {
    return this.mapRepo.find();
  }

  createMap(dto: CreateMapDto): Promise<Map> {
    const map = this.mapRepo.create(dto);
    return this.mapRepo.save(map);
  }

  detailMap(id: string): Promise<Map | null> {
    return this.mapRepo.findOneBy({ id });
  }

  async updateMap(dto: UpdateMapDto, id: string): Promise<Map | null> {
    await this.mapRepo.update(id, dto);
    return this.detailMap(id);
  }

  async deleteMap(id: string): Promise<boolean> {
    const result = await this.mapRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
