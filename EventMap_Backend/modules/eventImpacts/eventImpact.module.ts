import { Module } from "@nestjs/common";
import { EventImpactController } from "./eventImpact.controller";
import { EventImpactService } from "./eventImpact.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventsImpact } from "./eventImpact.model";

@Module({
    imports: [TypeOrmModule.forFeature([EventsImpact])],
    controllers: [EventImpactController],
    providers: [EventImpactService],
})
export class EventImpactsModule {}