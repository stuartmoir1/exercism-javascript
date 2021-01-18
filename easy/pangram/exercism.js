const ALPHABET_LENGTH = 26;

const isPangram = (letters) => {
  const re = /([a-z])(?=.*\1)|[^a-z]/gi;
  return letters.replace(re, '').length === ALPHABET_LENGTH;
}

module.exports = {
  isPangram
};

