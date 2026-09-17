import { PartialType } from '@nestjs/swagger';
import { CreateAccountDto } from './create_account.dto';

export class UpdateAccountDto extends PartialType(CreateAccountDto) {}
