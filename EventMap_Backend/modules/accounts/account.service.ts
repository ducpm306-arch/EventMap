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

    getAccount: Promise<Account[]> {
        return this.taskRepo.find();
    }

    createAccount(dto: AccountDto): Promise<Account> {
        const account = this.accountRepo.create(dto);
        return this.accountReoi.save(account);
    }

    detailAccount(id: number): Promise<Account | null> {
        return this.accountRepo.findOneBy({ id });
    }

    async updateAccount(dto: AccountDto, id: number): Promise<Account | null> {
        await this.accountRepo.update(id, dto);
        return this.detailTask(id);
    }

    async deleteAccount(id: number): Promise<boolean> {
        const result = await this.accountRepo.delete(id);
        return (result.affected ?? 0) > 0;
    }
}