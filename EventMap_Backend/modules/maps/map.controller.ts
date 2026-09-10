import { Body, Controller, Delete, Param } from "@nestjs/common";
import { MapService } from "./map.service";
import { MapDto } from "./dto/map.dto";

@Controller('maps')
export class MapController {
    constructor(private readonly mapService: MapService)

    @Get()
    getMap() {
        return this.mapService.getMap();
    }

    @Post()
    createMap(@Body() dto: MapDto) {
        return this.mapService.createMap(dto);
    }

    @Get('/:id') 
    detailMap(@Param('id') id: string) {
        return this.mapService.detailMap(id);
    }

    @Put('/:id')
    updateMap(@Body() dto: MapDto, @Param('id') id: string) {
        return this.mapService.updateMap(id, dto);
    }    

    @Delete('/:id')
    deleteMap(@Param('id') id: string) {
        return this.mapService.deleteMap(id);
    }
}