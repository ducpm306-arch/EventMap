import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EventImpactService } from "./eventImpact.service";
import { EventImpactDto } from "./dto/eventImpact.dto";

@Controller('event-impacts')
export class EventImpactController {
    constructor(private readonly eventImpactService: EventImpactService) {}

    @Get()
    getEventImpactService() {
        return this.eventImpactService.getEvenImpact();
    }

    @Post()
    createEventImpactService(@Body() dto: EventImpactDto) {
        return this.eventImpactService.createEvenImpact(dto);
    }

    @Get('/:id')
    detailEventImpactService(@Param('id') id: string) {
        return this.eventImpactService.detailEvenImpact(id);
    }

    @Put('/:id')
    updateEvenImpactService(@Body() dto: EventImpactDto, @Param('id') id: string) {
        return this.eventImpactService.updateEvenImpact(dto, id);
    }

    @Delete('/:id')
    deleteEvenImpactService(@Param('id') id: string) {
        return this.eventImpactService.deleteEvenImpact(id);
    }
}
