class Matrix {
  #rows
  #columns

  constructor(matrix) {
    this.#rows = matrix
      .split('\n')
      .map((e) => e.split(' ').map(Number));
    this.#columns = this.#rows[0]
      .map((_, i) => this.#rows.map(e => e[i]));
  }

  get rows() {
    return this.#rows;
  }

  get columns() {
    return this.#columns;
  }
}

module.exports = {
  Matrix
};

