class Series {
  constructor(digits) {
    this.digits = digits;
  }

  checkDigits(sliceLength) {
    if (this.digits.length && sliceLength > this.digits.length) {
      throw new Error('slice length cannot be greater than series length');
    }

    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero');
    }

    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative');
    }

    if (this.digits.length === 0) {
      throw new Error('series cannot be empty');
    }

    return;
  }

  slices(sliceLength) {
    this.checkDigits(sliceLength);

    const arr = [];
    for (let i = 0; i < this.digits.length - sliceLength + 1; i++) {
      arr[i] = this.digits
        .slice(i, i + sliceLength)
        .split('')
        .map(e => +e);
    }
    return arr;
  }
}

module.exports = {
  Series
};

