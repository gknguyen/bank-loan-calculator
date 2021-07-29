import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankLoanModule } from '../../modules/bankLoan/bankLoan.module';
import getMongoConfig from '../../mongo/mongo.helper';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => getMongoConfig(),
    }),
    BankLoanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
