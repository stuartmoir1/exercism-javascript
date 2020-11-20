const gigasecond = (date) => {
  const ms1 = date.getTime(date) / 1000;
  const ms2 = Math.pow(10, 9);
  return new Date((ms1 + ms2) * 1000);
};

module.exports = {
  gigasecond
};

