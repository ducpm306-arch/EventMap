import { IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class EventImpactDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^\d+$/, { message : 'event_id phải là bigint hợp lệ' })
    event_id: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d+$/, { message: 'object_group_id là bigint hợp lệ'})
    object_group_id: string | null;

    @IsOptional()
    @IsString()
    @Matches(/^\d+$/, {message: 'object_id phải là bigint hợp lệ'})
    object_id: string | null;    
}