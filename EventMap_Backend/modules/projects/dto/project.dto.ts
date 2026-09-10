import { IsNotEmpty, IsString, Matches, MaxLength } from "class-validator";

export class ProjectDTO {
    @IsNotEmpty()
    @IsString()
    @MaxLength(200)
    name: string;

    @IsString()
    @IsNotEmpty
    description: string;

    @Matches(/^\d+$/, {message: 'map_id phải là bigint hợp lệ'})
    map_id: string;

    @Matches(/^\d+$/, {message: 'account_id phải là bigint hợp lệ'})
    account_id: string;
}