import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BankLoan } from './bankLoan.schema';

@Schema()
export class Bank extends mongoose.Document {
  @Prop({ type: String, required: true, unique: true })
  name: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'bankloanList' }],
  })
  bankloanList: BankLoan[];
}

const BankSchema = SchemaFactory.createForClass(Bank);

export default BankSchema;
