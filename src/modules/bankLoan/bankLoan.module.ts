import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import CONSTANT from 'src/config/constant';
import BankLoanSchema from 'src/mongo/schema/bankLoan.schema';
import { BankLoanController } from './bankLoan.controller';
import { BankLoanService } from './bankLoan.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CONSTANT.MONGO.DOCUMENTS.BANK_LOAN, schema: BankLoanSchema },
    ]),
  ],
  controllers: [BankLoanController],
  providers: [BankLoanService],
})
export class BankLoanModule {}
