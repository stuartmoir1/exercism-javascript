class Squares {
  constructor(number) {
    this.numbers = Array.from({length: number}, (_, i = 1) => i + 1);
  }

  get sumOfSquares() {
    return this.numbers.reduce((acc, cur) => acc += Math.pow(cur, 2), 0);
  }

  get squareOfSum() {
    return Math.pow(this.numbers.reduce((acc, cur) => acc += cur, 0), 2);

  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

module.exports = {
  Squares
};

