import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateItemGroupDto } from './dto/create_itemGroup.dto';
import { ItemGroup } from './itemGroup.model';
import { UpdateItemGroupDto } from './dto/update_itemGroup.dto';

@Injectable()
export class ItemGroupService {
  constructor(
    @InjectRepository(ItemGroup)
    private itemGroupRepo: Repository<ItemGroup>,
  ) {}

  getItemGroup(): Promise<ItemGroup[]> {
    return this.itemGroupRepo.find();
  }

  createItemGroup(dto: CreateItemGroupDto): Promise<ItemGroup> {
    const itemGroup = this.itemGroupRepo.create(dto);
    return this.itemGroupRepo.save(itemGroup);
  }

  detailItemGroup(id: string): Promise<ItemGroup | null> {
    return this.itemGroupRepo.findOneBy({ id });
  }

  async updateItemGroup(
    dto: UpdateItemGroupDto,
    id: string,
  ): Promise<ItemGroup | null> {
    await this.itemGroupRepo.update(id, dto);
    return this.detailItemGroup(id);
  }

  async deleteItemGroup(id: string): Promise<boolean> {
    const result = await this.itemGroupRepo.delete(id);
    return (result.affected ?? 0) > 0;
  }
}
