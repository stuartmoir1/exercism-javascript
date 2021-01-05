const decode = (data) => {
  const re = /\d/;
  let numStr = '';
  let decode = '';

  data
    .split('')
    .forEach(e => {
      if (re.test(e)) {
        numStr += e;
      } else {
        decode += (numStr ? e.repeat(numStr) : e);
        numStr = '';
      }
    });

  return decode;
};

const encode = (data) => {
  const code = [];

  data
    .split('')
    .forEach((e, i) => {
       const len = code.length;
       if (!len || Object.keys(code[len - 1])[0] !== e) {
         code.push({ [e]: 1 });
       } else {
         code[code.length - 1][e] += 1;
       }
    });


  return code.reduce((acc, cur) => {
    const number = Object.values(cur)[0];
    return acc + (number > 1 ? number : '') + Object.keys(cur)[0];
  }, '');
};

module.exports = {
  decode,
  encode
};

