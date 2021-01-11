const score = (x, y) => {
  const radius = Math.sqrt((x ** 2) + (y ** 2));

  if (radius > 5 && radius <= 10) {
    return 1;
  } else if (radius > 1 && radius <= 5) {
    return 5;
  } else if (radius >= 0 && radius <= 1) {
    return 10;
  }
  return 0;
};

module.exports = {
  score
};

