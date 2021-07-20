import { MongooseModuleOptions } from '@nestjs/mongoose';
import ENV from 'src/config/env';

export default function getMongoConfig(): MongooseModuleOptions {
  return {
    uri: ENV.MONGO_CONNECTION,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
}
