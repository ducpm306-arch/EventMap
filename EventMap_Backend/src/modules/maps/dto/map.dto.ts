import { IsNotEmpty, IsString, IsUrl, MaxLength } from "class-validator";

export class MapDto {
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsString()
  @IsNotEmpty()
  map_url: string;    
}