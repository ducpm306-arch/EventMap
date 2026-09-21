import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateItemGroupDto } from './dto/create_itemGroup.dto';
import { ItemGroupService } from './itemGroup.service';
import { UpdateItemGroupDto } from './dto/update_itemGroup.dto';

@Controller('item-groups')
export class ItemGroupController {
  constructor(private readonly itemGroupService: ItemGroupService) {}

  @Get()
  getItemGroup() {
    return this.itemGroupService.getItemGroup();
  }

  @Post()
  createItemGroup(@Body() dto: CreateItemGroupDto) {
    return this.itemGroupService.createItemGroup(dto);
  }

  @Get('/:id')
  detailItemGroup(@Param('id') id: string) {
    return this.itemGroupService.detailItemGroup(id);
  }

  @Put('/:id')
  updateItemGroup(@Body() dto: UpdateItemGroupDto, @Param('id') id: string) {
    return this.itemGroupService.updateItemGroup(dto, id);
  }

  @Delete('/:id')
  deleteItemGroup(@Param('id') id: string) {
    return this.itemGroupService.deleteItemGroup(id);
  }
}
