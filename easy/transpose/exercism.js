const transpose = (arr) => {
  const numColumns = arr.length;
  let numRows = 0;

  arr.forEach(e => numRows = e.length > numRows ? e.length : numRows);

  // pad out elements so each element length equals number of rows
  const padded = arr.map(row => {
    return row.length < numRows
      ? row + Array(numRows - row.length).fill(' ').join('')
      : row;
  });

  const transposed = Array(numRows).fill('');

  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      transposed[j] += padded[i].charAt(j);
    }
  }

  // remove padding from last element
  return transposed.map((e, i, arr) => {
    return i !== arr.length - 1 ? e : e.replace(/ +$/, '');
  });
};

module.exports = {
  transpose
};

