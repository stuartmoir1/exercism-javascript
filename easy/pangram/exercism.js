const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const isPangram = (sentence) => {
  if (!sentence.length) return false;

  const letters = {};
  for (let letter of ALPHABET.split('')) {
    const re = new RegExp(letter, 'gi');
    letters[letter] = (sentence.match(re) || '').length;
  }

  return !Object.values(letters).includes(0);
};

module.exports = {
  isPangram
};
