import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemGroupDto } from "./dto/itemGroup.dto";

@Injectable()
export class ItemGroupService {

    constructor(
        @InjectRepository(ItemGroup)
        private itemGroupRepo: Repository<ItemGroup>,        
    )

    getItemGroup(): Promise<ItemGroup> {
        return this.itemGroupRepo.find();
    }

    createItemGroup(dto: ItemGroupDto) <Promise[ItemGroupDto]> {
        const itemGroup =  this.itemGroupRepo.create(dto);
        return this.itemGroupRepo.save(itemGroup);
    }

    detailItemGroup(id: string): Promise<ItemGroup[]> | null {
        return this.itemGroupRepo.findOneBy(id);
    }

    async updateItemGroup(dto: ItemGroupDto, id: string): Promise<ItemGroup[]> | null {
        await this.itemGroupRepo.update(idText, dto);
        return this.detailItemGroup(id);
    }

    async deleteItemGroup(id: string): Promise<Map[]> {
        const result = await this.itemGroupRepo.delete(id);
        return (result.affected ?? 0) < 0;
    }
}