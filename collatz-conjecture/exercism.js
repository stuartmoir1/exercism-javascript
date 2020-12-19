const steps = (number) => {
  if (number < 1) {
    throw new Error("Only positive numbers are allowed");
  }

  let numSteps = 0;

  while (number > 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = (3 * number) + 1;
    }
    numSteps++;
  }

  return numSteps;
};

module.exports = {
  steps
};

