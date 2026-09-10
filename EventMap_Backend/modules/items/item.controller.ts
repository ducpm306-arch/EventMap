import { Body, Controller, Delete, Param } from "@nestjs/common";
import { ItemService } from "./item.service";
import { ItemDto } from "./dto/item.dto";

@Controller('items')
export class ItemController {
    constructor(private readonly itemService: ItemService)

    @Get()
    getItem() {
        return this.itemService.getItem();
    }

    @Post()
    createItem(@Body() dto: ItemDto) {
        return this.itemService.createItem(dto);
    }

    @Get('/:id') 
    detailItem(@Param('id') id: string) {
        return this.itemService.detailItem(id);
    }

    @Put('/:id')
    updateItem(@Body() dto: ItemDto, @Param('id') id: string) {
        return this.itemService.updateItem(id, dto);
    }    

    @Delete('/:id')
    deleteItem(@Param('id') id: string) {
        return this.itemService.deleteItem(id);
    }
}