import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Account } from '../account.model';
import { IsUnique } from '../../../global/validators/unique.validator';

export class AccountDto {
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
