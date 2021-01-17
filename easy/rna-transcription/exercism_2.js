const transcription = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]);

const toRna = (sequence) => {
  return sequence
    .split('')
    .map(e => transcription.get(e))
    .join('');
};

module.exports = {
  toRna
};

