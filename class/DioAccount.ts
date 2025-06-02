export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso.')
  }

  getName = (): string => {
    return this.name
  }

  public deposit = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Deposito de R$${value} realizado com sucesso.`);
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()) {
      if (this.balance - value >= 0) {
        this.balance -= value
        console.log(`Saque de R$${value} realizado com sucesso.`)
      }
      else {
        throw new Error('Saldo insuficiente.')
      }
    }
  }

    getBalance = ():void => {
    console.log(`Seu saldo é de R$${this.balance.toFixed(2)}`);
    
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
