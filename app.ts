import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

// const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
// // console.log(peopleAccount)
// peopleAccount.deposit(23)
// peopleAccount.withdraw(12)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
// console.log(companyAccount)
// companyAccount.deposit(54)
companyAccount.getLoan(100)
// companyAccount.withdraw(12)

// const bonusAccount: BonusAccount = new BonusAccount('Macedo', 30)
// // console.log(bonusAccount)
// bonusAccount.bonusDeposit(40)
// bonusAccount.withdraw(12)
// bonusAccount.getBalance()