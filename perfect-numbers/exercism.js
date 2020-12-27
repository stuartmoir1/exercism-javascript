const classify = (number) => {
  if (number <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  const integer = Array
    .from(Array(number + 1), (_, i) => i)
    .filter((e) => number % e === 0)
    .reduce((acc, cur) => acc + cur, 0 - number);

  return integer === number
    ? 'perfect'
    : (integer > number ? 'abundant' : 'deficient');
};

module.exports = {
  classify
};

