const isArmstrongNumber = (number) => {
  const numAsString = number.toString();
  const numDigits = numAsString.length;

  return numAsString
    .split('')
    .reduce((acc, cur) => {
      return acc + (cur ** numDigits)
    }, 0) === number;
};

module.exports = {
  isArmstrongNumber
};
