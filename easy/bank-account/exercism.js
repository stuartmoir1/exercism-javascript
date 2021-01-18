class BankAccount {
  #balance
  #isOpen

  constructor() {
    this.#balance;
    this.#isOpen = false;
  }

  open() {
    if (this.#isOpen) {
      throw new ValueError();
    }
    this.#balance = 0;
    this.#isOpen = true;
  }

  close() {
    if (!this.#isOpen) {
      throw new ValueError();
    }
    this.#isOpen = false;
  }

  deposit(amount) {
    if (!this.#isOpen || amount < 0) {
      throw new ValueError();
    }
    this.#balance += amount;
  }

  withdraw(amount) {
    if (!this.#isOpen || amount < 0 || this.#balance - amount < 0) {
      throw new ValueError();
    }
    this.#balance -= amount;
  }

  get balance() {
    if (!this.#isOpen) throw new ValueError();
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

