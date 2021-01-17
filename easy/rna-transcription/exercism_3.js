const transcription = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]);

const toRna = (dna) => {
  return dna.replace(/./g, (n) => transcription.get(n));
};

module.exports = {
  toRna
};

