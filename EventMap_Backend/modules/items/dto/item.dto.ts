import { IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

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

    @Matches(/^\d+$/, {message: 'item_group_id phải là bigint hợp lệ'})
    item_group_id: number;

    @IsNotEmpty()
    @Matches(/^\d+$/, {message: 'project_id phải là bigint hợp lệ'})
    project_id: string | null;
}