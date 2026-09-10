import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Account } from "./account.model";
import { Repository } from "typeorm";
import { AccountDto } from "./dto/account.dto";

@Injectable()
export class AccountService {
    constructor(
        @InjectRepository(Account)
        private accountRepo: Repository<Account>,
    ) {}

    getAccount(): Promise<Account[]> {
        return this.accountRepo.find();
    }

    createAccount(dto: AccountDto): Promise<Account> {
        const account = this.accountRepo.create(dto);
        return this.accountRepo.save(account);
    }

    detailAccount(id: string): Promise<Account | null> {
        return this.accountRepo.findOneBy({ id });
    }

    async updateAccount(dto: AccountDto, id: string): Promise<Account | null> {
        await this.accountRepo.update(id, dto);
        return this.detailAccount(id);
    }

    async deleteAccount(id: string): Promise<boolean> {
        const result = await this.accountRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}