class HighScores {
  constructor(list) {
    this._list = list;
  }

  get scores() {
    return this._list;
  }

  get latest() {
    return this._list[this._list.length - 1];
  }

  get personalBest() {
    return this._list.sort((a, b) => b - a)[0];
  }

  get personalTopThree() {
    return this._list
      .sort((a, b) => b - a)
      .slice(0, 3);
  }
}

module.exports = {
  HighScores
};

