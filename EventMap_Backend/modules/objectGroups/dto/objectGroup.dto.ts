import { IsHexColor, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class ObjectGroupDto {
    @IsString()
    @MaxLength(200)
    @IsNotEmpty()
    name: string;

    @Matches(/^#[0-9a-fA-F]{6}$/, { message : 'color_hex phải hợp lệ'})
    @MaxLength(7)
    @IsNotEmpty()
    color_hex: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @Matches(/^\d+$, { message : 'project_id phải là bigint hợp lệ' })
    project_id: string | null;
}