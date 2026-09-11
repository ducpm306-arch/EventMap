import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class EventDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    name: string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    event_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^\d+$/, {message: 'project_id phải là bigint hợp lệ'})
    project_id: string;    
}
