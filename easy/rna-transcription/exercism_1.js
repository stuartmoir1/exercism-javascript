const TRANSCRIPTION = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const toRna = (dna) => {
  return dna
    .split('')
    .map(e => TRANSCRIPTION[e])
    .join('');
};

module.exports = {
  toRna
};

