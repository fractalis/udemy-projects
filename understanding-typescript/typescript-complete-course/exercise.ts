type BankAccount = { money: number, deposit: (val: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

type Self = { name: string, bankAccount: BankAccount, hobbies: string[] }

let myself: Self = {
  name: "Scott",
  bankAccount: bankAccount,
  hobbies: ["Gaming"]
};

myself.bankAccount.deposit(3000);

console.log(myself);
