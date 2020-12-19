const convert = (number) => {
  let string = '';

  if (number % 3 === 0 || number % 5 === 0 || number % 7 === 0) {
    if (number % 3 === 0) {
      string += 'Pling';
    }
    if (number % 5 === 0) {
       string += 'Plang';
    }
    if (number % 7 === 0) {
      string += 'Plong';
    }
  } else {
   string = number.toString();
  }

  return string;
};

module.exports = {
  convert
};

