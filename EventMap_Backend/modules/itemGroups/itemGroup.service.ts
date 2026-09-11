import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemGroupDto } from "./dto/itemGroup.dto";
import { ItemGroup } from "./itemGroup.model";

@Injectable()
export class ItemGroupService {

    constructor(
        @InjectRepository(ItemGroup)
        private itemGroupRepo: Repository<ItemGroup>,        
    ) {}

    getItemGroup(): Promise<ItemGroup[]> {
        return this.itemGroupRepo.find();
    }

    createItemGroup(dto: ItemGroupDto): Promise<ItemGroup> {
        const itemGroup =  this.itemGroupRepo.create(dto);
        return this.itemGroupRepo.save(itemGroup);
    }

    detailItemGroup(id: string): Promise<ItemGroup | null> {
        return this.itemGroupRepo.findOneBy({ id });
    }

    async updateItemGroup(dto: ItemGroupDto, id: string): Promise<ItemGroup | null> {
        await this.itemGroupRepo.update(id, dto);
        return this.detailItemGroup(id);
    }

    async deleteItemGroup(id: string): Promise<boolean> {
        const result = await this.itemGroupRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}
