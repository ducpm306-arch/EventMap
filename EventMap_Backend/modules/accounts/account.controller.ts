import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountDto } from "./dto/account.dto";

@Controller('accounts')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get()
    getAccount() {
        return this.accountService.getAccount();
    }

    @Post()
    createAccount(@Body() dto: AccountDto) {
        return this.accountService.createAccount(dto);
    }

    @Get('/:id')
    detailAccount(@Param('id') id: string) {
        return this.accountService.detailAccount(id);
    }

    @Put('/:id')
    updateAccount( @Body() dto: AccountDto, @Param('id') id: string ) {
        return this.accountService.updateAccount(dto, id);
    }

    @Delete('/:id')
    deleteAccount(@Param('id') id: string) {
        return this.accountService.deleteAccount(id);
    }
}