import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create_item.dto';
import { UpdateItemDto } from './dto/update_item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  getItem() {
    return this.itemService.getItem();
  }

  @Post()
  createItem(@Body() dto: CreateItemDto) {
    return this.itemService.createItem(dto);
  }

  @Get('/:id')
  detailItem(@Param('id') id: string) {
    return this.itemService.detailItem(id);
  }

  @Put('/:id')
  updateItem(@Body() dto: UpdateItemDto, @Param('id') id: string) {
    return this.itemService.updateItem(dto, id);
  }

  @Delete('/:id')
  deleteItem(@Param('id') id: string) {
    return this.itemService.deleteItem(id);
  }
}
