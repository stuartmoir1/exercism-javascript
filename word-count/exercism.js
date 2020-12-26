
const countWords = (words) => {
  const obj = {};
  const re1 = /[,\t\n]/g;
  const re2 = /[:.\!\&@\$%\^&]|^\'|\'$/g;

  words
    .replace(re1, ' ')
    .split(' ')
    .forEach(e => {
      const word = e
        .replace(re2, '')
        .toLowerCase();
      if (word) {
        obj[word] = (obj[word] ? obj[word] + 1 : 1);
      }
    });

  return obj;
};

module.exports ={
  countWords
};

