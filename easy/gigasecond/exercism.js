const gigasecond = (date) => {
  return new Date(date.getTime() + 10e11);
};

module.exports = {
  gigasecond
};

