const isIsogram = (phrase) => {
  const letters = {};

  phrase
    .toLowerCase()
    .replace(/[ -]/, '')
    .split('')
    .forEach(e => letters[e] = letters[e] ? letters[e] + 1 : 1)

  const numOfLetters = Object.keys(letters).length;
  const sumOfLetters = Object
    .values(letters)
    .reduce((acc, cur) => acc + cur, 0);

  return numOfLetters === sumOfLetters;
};

module.exports = {
  isIsogram
};

