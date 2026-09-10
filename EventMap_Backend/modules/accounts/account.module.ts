import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ValidatorsModule } from '../../global/validators/validators.module';
import { AccountController } from './account.controller';
import { Account } from './account.model';
import { AccountService } from './account.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account]), ValidatorsModule],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
