import { DioAccount } from './DioAccount'

export class BonusAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    bonusDeposit = (value: number): void => {
        const bonus = 10
        this.deposit(bonus + value)
    }
}