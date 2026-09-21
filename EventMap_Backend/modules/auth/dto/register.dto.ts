export class RegisterDto {
  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsEmail()
  @MaxLength(200)
  @IsNotEmpty()
  @IsUnique(Account, 'email', { message: 'Email đã được sử dụng' })
  email: string;

  @IsString()
  @MaxLength(200)
  @IsNotEmpty()
  password_hash: string;
}
