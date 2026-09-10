import { Body, Controller, Delete, Param, ParseIntPipe, Post } from "@nestjs/common";
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
    createAccount(@Body() dto: TaskDto) {
        return this.accountService.createAccount(dto);
    }

    @Get('/:id')
    detailAccount(@Param('id', ParseIntPipe) id: number) {
        return this.accountService.detailAccount(id);
    }

    @Put('/:id')
    updateAccount( @Body() dto: AccountDto, @Param('id', ParseIntPipe) id: number ) {
        return this.accountService.updateAccount(dto, id);
    }

    @Delete('/:id')
    deleteAccount(@Param('id', ParseIntPipe) id: number) {
        return this.accountService.deleteAccount(id);
    }
}