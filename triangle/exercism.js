class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  // No zero-length sides
  _isTriangleRule1() {
    return this.a > 0 && this.b > 0 && this.c > 0;
  }

  // Meets the triangle inequality
  _isTriangleRule2() {
    return this.a + this.b > this.c
      && this.b + this.c > this.a
      && this.c + this.a > this.b;
  }

  _isTwoSidesEqual() {
    return (this.a === this.b && this.b !== this.c)
      || (this.a === this.c && this.c !== this.b)
      || (this.b === this.c && this.c !== this.a);
  }

  _isTwoSidesSumEqualsThirdSide() {
    return this.a + this.b === this.c
      || this.b + this.c === this.a
      || this.c + this.a === this.b;
  }

  isEquilateral() {
    return this._isTriangleRule1()
      ? (this.a === this.b) && (this.b === this.c)
      : false;
  }

  isIsosceles() {
    return this._isTriangleRule1() && this._isTriangleRule2()
      ? this._isTwoSidesEqual() || this.isEquilateral(this.a, this.b, this.c)
      : false;
  }

  isScalene() {
    return this._isTriangleRule1() && this._isTriangleRule2()
      ? (this.a != this.b) && (this.b !== this.c)
      : false;
  }

  isDegenerate() {
    return this._isTriangleRule1()
      ? this._isTwoSidesSumEqualsThirdSide()
      : false;
  }
}

module.exports = {
  Triangle
};

