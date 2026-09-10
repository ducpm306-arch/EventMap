import { Module } from "@nestjs/common";
import { ObjectGroupController } from "./objectGroup.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ObjectGroup } from "./objectGroup.model";
import { ObjectGroupService } from "./objectGroup.service";

@Module({
    imports: [TypeOrmModule.forFeature([ObjectGroup])],
    controllers: [ObjectGroupController],
    providers: [ObjectGroupService],
})
export class ObjectGroupModule {}