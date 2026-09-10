import { IsDate, IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class EventDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    name: string;

    @IsDate()
    @IsNotEmpty()
    event_date: Date;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @Matches(/^\d+$/, {message: 'project_id phải là bigint hợp lệ'})
    project_id: string;    
}