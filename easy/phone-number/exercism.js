const checkDigits = (parsed) => {
  if (parsed.length > 11) {
    throw new Error('More than 11 digits');
  } else if (parsed.length === 11) {
    if (+parsed.charAt(0) !== 1) {
      throw new Error('11 digits must start with 1');
    }
    parsed = parsed.slice(1);
  } else if (parsed.length !== 10) {
    throw new Error('Incorrect number of digits');
  }

  return parsed;
}

const checkFormat = (parsed) => {
  const re1 = /[a-z]/i;
  const re2 = /[@:\!]/;
  const re3 = /^0/;
  const re4 = /^1/;
  const re5 = /^10/;
  const re6 = /^11/;
  const re7 = /^1[2-9][0-9]{2}0/;
  const re8 = /^1[2-9][0-9]{2}1/;

  if (re1.test(parsed)) {
    throw new Error('Letters not permitted');
  } else if (re2.test(parsed)) {
    throw new Error('Punctuations not permitted');
  } else if ((re3.test(parsed) && parsed.length === 10) || re5.test(parsed)) {
    throw new Error('Area code cannot start with zero');
  } else if ((re4.test(parsed) && parsed.length === 10) || re6.test(parsed)) {
    throw new Error('Area code cannot start with one');
  } else if ((!re4.test(parsed) && +parsed.charAt(3) === 0) || re7.test(parsed)) {
    throw new Error('Exchange code cannot start with zero');
  } else if ((!re4.test(parsed) && +parsed.charAt(3) === 1) || re8.test(parsed)) {
    throw new Error('Exchange code cannot start with one');
  }
}

const clean = (number) => {
  const re = /[\(\)\-\.\+ ]/g;
  let parsed = number.replace(re, '');

  checkFormat(parsed);
  return checkDigits(parsed);
};

module.exports = {
  clean
};

