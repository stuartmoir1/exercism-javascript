const NUMERALS = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I'
};

const toRoman = (num) => {
  let numerals = '';

  Object.keys(NUMERALS)
    .reverse()
    .forEach(e => {
      if (num >= e) {
        const factor = Math.floor(num / e);
        numerals += factor > 1
          ? NUMERALS[e].repeat(factor)
          : NUMERALS[e];
        num -= e * factor;
      } else {
        return;
      }
    });

  return numerals;
};

module.exports = {
  toRoman
};

