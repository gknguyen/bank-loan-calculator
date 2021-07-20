import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BankLoanModule } from 'src/modules/bankLoan/bankLoan.module';
import getMongoConfig from 'src/mongo/mongo.helper';
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
