import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateMapDto {
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsString()
  @IsNotEmpty()
  map_url: string;
}
