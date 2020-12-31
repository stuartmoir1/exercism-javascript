class DiffieHellman {
  constructor(p, g) {
    this.p = p;
    this.g = g;

    this.checkRange();
    this.checkPrime(p);
    this.checkPrime(g);
  }

  checkRange() {
    if (this.p <= 0 || this.g >= 9999) {
      throw new Error('paramater(s) out of range');
    }
    return;
  }

  checkPrime(number) {
    const message = `argument ${number} is not a prime number`;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) throw new Error(message);
    }
    if (number < 1) throw new Error(message);
    return;
  }

  checkPrivateKey(key) {
    if (key <= 1) {
      throw new Error('private key is less than 1');
    }
    if (key >= this.p) {
      throw new Error('private key is greater than or equal to modulus p');
    }
  }

  getPublicKey(privateKey) {
    this.checkPrivateKey(privateKey);
    return (this.g ** privateKey) % this.p;
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return (theirPublicKey ** myPrivateKey) % this.p;
  }
}

module.exports = {
  DiffieHellman
};

