import { IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from "class-validator";

export class ItemDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    boundary: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsOptional()
    @IsString()
    @Matches(/^\d+$/, {message: 'item_group_id phải là bigint hợp lệ'})
    item_group_id: string | null;

    @IsNotEmpty()
    @Matches(/^\d+$/, {message: 'project_id phải là bigint hợp lệ'})
    project_id: string;
}
