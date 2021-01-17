const transcription = new Map([
  ['G', 'C'],
  ['C', 'G'],
  ['T', 'A'],
  ['A', 'U'],
]);

const toRna = (dna) => {
  checkInputIsValid(dna);
  return dna.replace(/./g, (n) => transcription.get(n));
};

const checkInputIsValid = (input) => {
  checkInputIsString(input);
  checkInputIsMappable(input);
  return;
}

const checkInputIsString = (input) => {
  if (typeof input !== 'string') {
    const msg = 'Input is not a string';
    throw new Error(msg);
  }
  return;
};

const checkInputIsMappable = (input) => {
  const keys = Array.from(transcription.keys());
  const isInputValid = input
    .split('')
    .filter(e => keys.filter(k => k === e).length)
    .length === input.length;

  if (!isInputValid) {
    const msg = 'Input string contains one or more unmappable characters';
    throw new Error(msg);
  }
  return;
}

module.exports = {
  toRna
};

