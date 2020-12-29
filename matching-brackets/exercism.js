const isNested = (brackets) => {
  const opening = []; // opening brackets
  const re = /[\(\{\[]/;
  let count = 0;

  for (let bracket of brackets) {
    count++;
    if (re.test(bracket)) {
      opening.push(bracket);
    } else {
      // check last opening bracket type
      const last = opening[opening.length -1];
      switch(bracket) {
        case ')':
          if (last !== '(') return false;
          break;
        case '}':
          if (last !== '{') return false;
          break;
        case ']':
          if (last !== '[') return false;
          break;
      }
      opening.pop();
    }
    // check not more opening brackets than closing
    if (opening.length && brackets.length === count) return false;
  }

  return true;
}

const isPaired = (text) => {
  if (!text) return true;

  const re = /[\(\)\{\}\[\]]/;
  const brackets = text
    .split('')
    .filter(e => re.test(e));

  return isNested(brackets);
}

module.exports = {
  isPaired
};

