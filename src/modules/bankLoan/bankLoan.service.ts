import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CONSTANT from 'src/config/constant';
import { IBankLoan } from 'src/config/inteface';

@Injectable()
export class BankLoanService {
  constructor(
    @InjectModel(CONSTANT.MONGO.DOCUMENTS.BANK_LOAN)
    private readonly bankLoanModel: Model<IBankLoan>,
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

  async createBankLoan(createBankLoanInput: IBankLoan) {
    try {
      const bankLoan = await this.bankLoanModel.create(createBankLoanInput);
      return bankLoan;
    } catch (err) {
      console.error(err);
    }
  }

  async updateBankLoan(bankLoanId: string, updateBankLoanInput: IBankLoan) {
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
