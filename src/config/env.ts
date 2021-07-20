import { config } from 'dotenv';

config();

const ENV = {
  NODE_ENV: process.env.NODE_ENV || '',
  PORT: process.env.PORT || '',
  DEBUG: process.env.DEBUG || '',
  MONGO_CONNECTION: process.env.MONGO_CONNECTION || '',
};

export default ENV;
