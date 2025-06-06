import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus()) {
      console.log(`Voçê pegou um emprestimo de R$${value}.`)
      this.deposit(value)
    }
  }
}
