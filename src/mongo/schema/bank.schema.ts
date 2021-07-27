import * as mongoose from 'mongoose';
import { IBank } from '../../config/inteface';

const BankSchema = new mongoose.Schema<IBank>(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
  },
);

export default BankSchema;
