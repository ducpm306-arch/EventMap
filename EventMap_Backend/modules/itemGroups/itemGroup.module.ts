import { Module } from "@nestjs/common";
import { ItemGroupController } from "./itemGroup.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemGroup } from "./itemGroup.model";
import { ItemGroupService } from "./itemGroup.service";

@Module({
    imports: [TypeOrmModule.forFeature([ItemGroup])],
    controllers: [ItemGroupController],
    providers: [ItemGroupService],
})
export class ItemGroupModule {}