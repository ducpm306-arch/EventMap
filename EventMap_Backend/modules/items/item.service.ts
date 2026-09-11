import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ItemDto } from "./dto/item.dto";
import { Item } from "./item.model";

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepo: Repository<Item>,        
    ) {}

    getItem(): Promise<Item[]> {
        return this.itemRepo.find();
    }

    createItem(dto: ItemDto): Promise<Item> {
        const item = this.itemRepo.create(dto);
        return this.itemRepo.save(item);
    } 

    detailItem(id: string): Promise<Item | null> {
        return this.itemRepo.findOneBy({ id });
    }

    async updateItem(dto: ItemDto, id: string): Promise<Item | null> {
        await this.itemRepo.update(id, dto);
        return this.detailItem(id);
    }

    async deleteItem(id: string): Promise<boolean> {
        const result = await this.itemRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}

