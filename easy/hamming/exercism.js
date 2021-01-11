const compute = (strandA, strandB) => {
  if (!strandA && strandB) {
    throw new Error('left strand must not be empty');
  }
  if (strandA && !strandB) {
    throw new Error('right strand must not be empty');
  }
  if (strandA.length !== strandB.length) {
    throw new Error('left and right strands must be of equal length');
  }

  return strandA
    .split('')
    .filter((e, i) => e !== strandB[i])
    .length
};

module.exports = {
  compute
};

