import { Module } from "@nestjs/common";
import { ObjectController } from "./object.controller";
import { ObjectService } from "./object.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Object } from "./object.model";

@Module({
    imports: [TypeOrmModule.forFeature([Object])],
    controllers: [ObjectController],
    providers: [ObjectService],
})
export class ObjectModule {}