import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { MapService } from './map.service';
import { CreateMapDto } from './dto/create_map.dto';
import { UpdateMapDto } from './dto/update_map.dto';

@Controller('maps')
export class MapController {
  constructor(private readonly mapService: MapService) {}

  @Get()
  getMap() {
    return this.mapService.getMap();
  }

  @Post()
  createMap(@Body() dto: CreateMapDto) {
    return this.mapService.createMap(dto);
  }

  @Get('/:id')
  detailMap(@Param('id') id: string) {
    return this.mapService.detailMap(id);
  }

  @Put('/:id')
  updateMap(@Body() dto: UpdateMapDto, @Param('id') id: string) {
    return this.mapService.updateMap(dto, id);
  }

  @Delete('/:id')
  deleteMap(@Param('id') id: string) {
    return this.mapService.deleteMap(id);
  }
}
