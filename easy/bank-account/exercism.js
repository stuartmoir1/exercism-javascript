class BankAccount {
  constructor() {
    this._balance;
    this._isOpen = false;
  }

  open() {
    if (this._isOpen) {
      throw new ValueError();
    }
    this._balance = 0;
    this._isOpen = true;
  }

  close() {
    if (!this._isOpen) {
      throw new ValueError();
    }
    this._isOpen = false;
  }

  deposit(amount) {
    if (!this._isOpen || amount < 0) {
      throw new ValueError();
    }
    this._balance += amount;
  }

  withdraw(amount) {
    if (!this._isOpen || amount < 0 || this._balance - amount < 0) {
      throw new ValueError();
    }
    this._balance -= amount;
  }

  get balance() {
    if (!this._isOpen) throw new ValueError();
    return this._balance;
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
