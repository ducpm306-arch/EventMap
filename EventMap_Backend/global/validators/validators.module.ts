import { Module } from '@nestjs/common';
import { IsUniqueConstraint } from './unique.validator';

@Module({
  providers: [IsUniqueConstraint],
  exports: [IsUniqueConstraint],
})
export class ValidatorsModule {}
