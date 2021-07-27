import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import * as HttpStatus from 'http-status';
import { IBankLoan } from 'src/config/inteface';
import {
  BankLoanListResponseDto,
  BankLoanResponseDto,
  CreateBankLoanInputDto,
  CreateBankLoanResponseDto,
  UpdateBankLoanResponseDto,
} from './bankLoan.dto';
import { BankLoanService } from './bankLoan.service';

@ApiTags('bank-loan')
@Controller('bank-loan')
export class BankLoanController {
  constructor(private readonly bankLoanService: BankLoanService) {}

  @Post('')
  @ApiOperation({
    operationId: 'createBankLoan',
    description: 'Create bank loan',
  })
  @ApiBody({
    type: CreateBankLoanInputDto,
    required: true,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Create bank loan data successfully',
    type: CreateBankLoanResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: Error,
  })
  createBankLoan(@Body() createBankLoanInput: IBankLoan) {
    return this.bankLoanService.createBankLoan(createBankLoanInput);
  }

  @Get()
  @ApiOperation({
    operationId: 'getBankLoanList',
    description: 'Get bank loan list',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get bank loan list data successfully',
    type: [BankLoanListResponseDto],
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: Error,
  })
  getBankLoanList() {
    return this.bankLoanService.getBankLoanList();
  }

  @Get(':id')
  @ApiOperation({
    operationId: 'getBankLoan',
    description: 'Get bank loan',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Get bank loan data successfully',
    type: BankLoanResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: Error,
  })
  getBankLoan(@Param('id') bankLoanId: string) {
    return this.bankLoanService.getBankLoan(bankLoanId);
  }

  @Put(':id')
  @ApiOperation({
    operationId: 'updateBankLoan',
    description: 'Update bank loan',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update bank loan data successfully',
    type: UpdateBankLoanResponseDto,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: Error,
  })
  updateBankLoan(
    @Param('id') bankLoanId: string,
    @Body() updateBankLoanInput: IBankLoan,
  ) {
    return this.bankLoanService.updateBankLoan(bankLoanId, updateBankLoanInput);
  }

  @Delete(':id')
  @ApiOperation({
    operationId: 'deleteBankLoan',
    description: 'Delete bank loan',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Delete bank loan data successfully',
    type: null,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad Request',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Unauthorized',
    type: Error,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal Server Error',
    type: Error,
  })
  deleteBankLoan(@Param('id') bankLoanId: string) {
    return this.bankLoanService.deleteBankLoan(bankLoanId);
  }
}
