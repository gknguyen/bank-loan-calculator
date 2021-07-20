import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BankLoan } from 'src/mongo/schema/bankLoan.schema';

@Injectable()
export class BankLoanService {
  constructor(
    @InjectModel('BankLoan') private readonly bankLoanModel: Model<BankLoan>,
  ) {}

  async getBankLoanList() {
    try {
      const bankLoanList = await this.bankLoanModel.find();
      return bankLoanList;
    } catch (err) {
      console.error(err);
    }
  }

  async getBankLoan(bankLoanId: string) {
    try {
      const bankLoan = await this.bankLoanModel.findById(bankLoanId);
      return bankLoan;
    } catch (err) {
      console.error(err);
    }
  }

  async createBankLoan(createBankLoanInput: BankLoan) {
    try {
      const bankLoan = await this.bankLoanModel.create(createBankLoanInput);
      return bankLoan;
    } catch (err) {
      console.error(err);
    }
  }

  async updateBankLoan(bankLoanId: string, updateBankLoanInput: BankLoan) {
    try {
      const bankLoan = await this.bankLoanModel.findByIdAndUpdate(
        bankLoanId,
        updateBankLoanInput,
      );
      return bankLoan;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteBankLoan(bankLoanId: string) {
    try {
      const result = await this.bankLoanModel.deleteOne({ _id: bankLoanId });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}
