const transform = (data) => {
  const letters = Object.values(data);
  const points = Object.keys(data);

  const transformed = {};

  points.forEach((pnt, i) => {
    letters[i].forEach((ltr) => {
      transformed[ltr.toLowerCase()] = +pnt;
    });
  });

  return transformed;
};

module.exports = {
  transform
};

