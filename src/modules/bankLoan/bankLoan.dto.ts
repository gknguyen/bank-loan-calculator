import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDate, IsNumber, IsObject, IsString } from 'class-validator';
import * as httpStatus from 'http-status';
import CONSTANT from '../../config/constant';
import {
  IBank,
  IBankLoan,
  IBankLoanListResponse,
  IBankLoanResponse,
  ICreateBankLoanInput,
  ICreateBankLoanResponse,
  ILoanInfo,
  IUpdateBankLoanResponse,
} from '../../config/inteface';

export class CreateBankLoanInputDto implements ICreateBankLoanInput {
  @IsObject()
  @ApiProperty({
    type: 'object',
    description: 'bank information',
    required: true,
    example: {
      name: 'Vietcombank',
    },
  })
  bank: IBank;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'bank loan contract number',
    required: true,
    example: 'ABC-123',
  })
  no: string;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of loan money',
    required: true,
    example: 100000000,
  })
  amount: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the interest rate',
    required: true,
    example: 6,
  })
  interest: number;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2021-01-01'),
  })
  startDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2022-01-01'),
  })
  endDate: Date;
}

export class CreateBankLoanResponseDto implements ICreateBankLoanResponse {
  @IsObject()
  @ApiProperty({
    type: 'object',
    description: 'bank information',
    required: true,
    example: {
      _id: '6101255bd014fc8d4e1e9304',
      name: 'Vietcombank',
      createdAt: '2021-07-28T09:37:31.255Z',
      updatedAt: '2021-07-28T09:37:31.255Z',
    },
  })
  bank: IBank;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'bank loan contract number',
    required: true,
    example: 'ABC-123',
  })
  no: string;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of loan money',
    required: true,
    example: 100000000,
  })
  amount: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the interest rate',
    required: true,
    example: 6,
  })
  interest: number;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2021-01-01'),
  })
  startDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2022-01-01'),
  })
  endDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the create date of the record',
    required: true,
    example: new Date('2021-07-28T09:37:31.255Z'),
  })
  createdAt: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the update date of the record',
    required: true,
    example: new Date('2021-07-28T09:37:31.255Z'),
  })
  updatedAt: Date;
}

export class BankLoanListResponseDto implements IBankLoanListResponse {
  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'bank loan id',
    required: true,
    example: '6101255bd014fc8d4e1e9303',
  })
  _id: string;

  @IsObject()
  @ApiProperty({
    type: 'object',
    description: 'bank information',
    required: true,
    example: {
      _id: '6101255bd014fc8d4e1e9304',
      name: 'Vietcombank',
      createdAt: new Date('2021-07-28T09:37:31.255Z'),
      updatedAt: new Date('2021-07-28T09:37:31.255Z'),
    },
  })
  bank: IBank;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'bank loan contract number',
    required: true,
    example: 'ABC-123',
  })
  no: string;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of loan money',
    required: true,
    example: 100000000,
  })
  amount: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the interest rate',
    required: true,
    example: 6,
  })
  interest: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of interest money to pay',
    required: true,
    example: 500000,
  })
  interestToPay: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of origin money to pay',
    required: true,
    example: 4500000,
  })
  originToPay: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of total money to pay',
    required: true,
    example: 5000000,
  })
  totalToPay: number;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2021-01-01'),
  })
  startDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2022-01-01'),
  })
  endDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the create date of the record',
    required: true,
    example: new Date('2021-07-28T09:37:31.255Z'),
  })
  createdAt: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the update date of the record',
    required: true,
    example: new Date('2021-07-28T09:37:31.255Z'),
  })
  updatedAt: Date;
}

export class BankLoanResponseDto implements IBankLoanResponse {
  @IsObject()
  @ApiProperty({
    type: 'object',
    description: 'bank loan information',
    required: true,
    example: {
      bank: {
        _id: '123456',
        name: 'Vietcombank',
      },
      amount: 100000000,
      interest: 6,
      startDate: new Date('2021-01-01'),
      endDate: new Date('2022-01-01'),
    },
  })
  bankLoan: IBankLoan;

  @IsArray()
  @ApiProperty({
    type: 'array',
    description: 'bank loan break down information',
    required: true,
    example: [
      {
        period: 1,
        interestToPay: 500000,
        originToPay: 4000000,
        totalToPay: 4500000,
        moneyRemain: 95500000,
      },
    ],
  })
  loanInfo: ILoanInfo[];
}

export class UpdateBankLoanResponseDto implements IUpdateBankLoanResponse {
  @IsObject()
  @ApiProperty({
    type: 'object',
    description: 'bank information',
    required: true,
    example: {
      _id: '123456',
      name: 'Vietcombank',
    },
  })
  bank: IBank;

  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'bank loan contract number',
    required: true,
    example: 'ABC-123',
  })
  no: string;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the amount of loan money',
    required: true,
    example: 100000000,
  })
  amount: number;

  @IsNumber()
  @ApiProperty({
    type: 'number',
    description: 'the interest rate',
    required: true,
    example: 6,
  })
  interest: number;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2021-01-01'),
  })
  startDate: Date;

  @IsDate()
  @ApiProperty({
    type: 'string',
    description: 'the start date of the contract',
    required: true,
    example: new Date('2022-01-01'),
  })
  endDate: Date;
}

export class BankLoanExistErrorResponseDto {
  @ApiProperty({
    type: 'string',
    description: 'HTTP status code',
    example: httpStatus.BAD_REQUEST,
  })
  statusCode: number;

  @ApiProperty({
    type: 'string',
    description: 'Error message',
    example: CONSTANT.ERROR_MESSAGE.BANK_LOAN_EXISTED,
  })
  message: string;

  @ApiProperty({
    type: 'string',
    description: 'Error code',
    example: 'Bad Request',
  })
  errorCode: string;
}
