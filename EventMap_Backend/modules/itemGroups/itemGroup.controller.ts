import { Controller, Param } from "@nestjs/common";
import { ItemGroupDto } from "./dto/itemGroup.dto";
import { ItemGroupService } from "./itemGroup.service";

@Controller('item-groups')
export class ItemGroupController {
    constructor(private readonly itemGroupService: ItemGroupService)

    @Get()
    getItemGroup() {
        return this.itemGroupService.getItemGroup();
    }

    @Post()
    createItemGroup(@Body() dto: ItemGroupDto) {
        return this.itemGroupService.createItemGroup(dto);
    }

    @Get('/:id')
    detailItemGroup(@Param("id") id: string) {
        return this.itemGroupService.detailItemGroup(id);
    }

    @Put('/:id')
    updateItemGroup(@Body() dto: ItemGroupDto, @Param("id") id: string) {
        return this.itemGroupService.updateItemGroup(id, dto);
    }

    @Delete('/:id')
    deleteItemGroup(@Param("id") id: string) {
        return this.itemGroupService.deleteItemGroup(id);
    }
}