export interface IBank {
  _id: string;
  name: string;
}

export interface IBankLoan {
  _id: string;
  bank: IBank;
  no: string;
  amount: number;
  interest: number;
  startDate: Date;
  endDate: Date;
}

export interface ILoanInfo {
  period: number;
  interestToPay: number;
  originToPay: number;
  totalToPay: number;
  moneyRemain: number;
}

export interface ICreateBankLoanInput {
  bank: IBank;
  no: string;
  amount: number;
  interest: number;
  startDate: Date;
  endDate: Date;
}

export interface IBankLoanListResponse {
  bank: IBank;
  no: string;
  amount: number;
  interest: number;
  interestToPay: number;
  originToPay: number;
  totalToPay: number;
  startDate: Date;
  endDate: Date;
}

export interface IBankLoanResponse {
  bankLoan: IBankLoan;
  loanInfo: ILoanInfo[];
}

export interface ICreateBankLoanResponse {
  bank: IBank;
  no: string;
  amount: number;
  interest: number;
  startDate: Date;
  endDate: Date;
}

export interface IUpdateBankLoanResponse {
  bank: IBank;
  no: string;
  amount: number;
  interest: number;
  startDate: Date;
  endDate: Date;
}
