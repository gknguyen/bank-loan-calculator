import * as mongoose from 'mongoose';
import { IBankLoan } from 'src/config/inteface';
import BankSchema from './bank.schema';

const BankLoanSchema = new mongoose.Schema<IBankLoan>(
  {
    bank: { type: BankSchema, required: true },
    no: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    interest: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

export default BankLoanSchema;
