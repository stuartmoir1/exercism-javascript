const isLeap = (number) => {
  const modBy4 = number % 4 === 0;
  const modBy100 = number % 100 === 0;
  const modBy400 = number % 400 === 0;
  return modBy4 && (!modBy100 || (modBy100 && modBy400));
};

module.exports = {
  isLeap
};

