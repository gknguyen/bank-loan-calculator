import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Bank } from './bank.schema';

@Schema()
export class BankLoan extends mongoose.Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'bank', required: true })
  bank: Bank;

  @Prop({ type: String, required: true, unique: true })
  no: string;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: Number, required: true, min: 0, max: 100 })
  interest: number;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: string;
}

const BankLoanSchema = SchemaFactory.createForClass(BankLoan);

export default BankLoanSchema;
