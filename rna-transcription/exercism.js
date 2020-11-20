const TRANSCRIPTION = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const toRna = (sequence) => {
  return sequence
    .split('')
    .map(e => TRANSCRIPTION[e])
    .join('');
};

module.exports = {
  toRna
};

