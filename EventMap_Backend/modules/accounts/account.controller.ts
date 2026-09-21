import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create_account.dto';
import { UpdateAccountDto } from './dto/update_account.dto';

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  getAccount() {
    return this.accountService.getAccount();
  }

  @Post()
  createAccount(@Body() dto: CreateAccountDto) {
    return this.accountService.createAccount(dto);
  }

  @Get('/:id')
  detailAccount(@Param('id') id: string) {
    return this.accountService.detailAccount(id);
  }

  @Put('/:id')
  updateAccount(@Body() dto: UpdateAccountDto, @Param('id') id: string) {
    return this.accountService.updateAccount(dto, id);
  }

  @Delete('/:id')
  deleteAccount(@Param('id') id: string) {
    return this.accountService.deleteAccount(id);
  }
}
