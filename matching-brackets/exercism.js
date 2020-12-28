const isNested = (brackets) => {
  const arr = [];
  const re = /[\(\{\[]/;
  let count = 0;

  for (let brkt of brackets) {
    count++;
    if (re.test(brkt)) {
      arr.push(brkt);
    } else {
      const last = arr[arr.length -1];
      switch(brkt) {
        // returns false where brackets not nested
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
      arr.pop();
    }
    // more opening brackets than closing
    if (arr.length && brackets.length === count) return false;
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

