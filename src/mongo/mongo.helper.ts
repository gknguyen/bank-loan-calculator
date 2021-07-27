import { MongooseModuleOptions } from '@nestjs/mongoose';
import CONSTANT from 'src/config/constant';
import ENV from 'src/config/env';

export default function getMongoConfig(): MongooseModuleOptions {
  return {
    uri: `${ENV.MONGO_CONNECTION}/${CONSTANT.MONGO.COLLECTION}`,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };
}
