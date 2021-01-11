class Matrix {
  constructor(matrix) {
    this._matrix = matrix;
    this._rows = this._matrix
      .split("\n")
      .map((e) => e.split(" "))
      .map((e) => e.map((f) => +f));
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return Array(this._rows[0].length)
      .fill(0)
      .map((_, i) => this.rows.map(e => e[i]));
  }
}

module.exports = {
  Matrix
};

