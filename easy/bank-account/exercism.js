class BankAccount {
  #balance;

  constructor() {
    this.#balance = null;
  }

  open() {
    if (this.#balance !== null) {
      throw new ValueError();
    }
    this.#balance = 0;
  }

  close() {
    if (this.#balance === null) {
      throw new ValueError();
    }
    this.#balance = null;
  }

  deposit(amount) {
    if (this.#balance === null || amount < 0) {
      throw new ValueError();
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance === null || amount < 0 || this.#balance - amount < 0) {
      throw new ValueError();
    }
    this.#balance -= amount;
  }

  get balance() {
    if (this.#balance === null) throw new ValueError();
    return this.#balance;
  }
}

class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}

module.exports = {
  BankAccount,
  ValueError
}

