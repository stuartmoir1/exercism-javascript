const { toRna } = require('../exercism_4');

describe('Transcription', () => {

  describe('error checking', () => {
    test('input is not string - number', () => {
      expect(() => toRna(1)).toThrow(new Error('Input is not a string'));
    });

    test('input is not string - array', () => {
      expect(() => toRna([])).toThrow(new Error('Input is not a string'));
    });

    test('input is not string - object', () => {
      expect(() => toRna({})).toThrow(new Error('Input is not a string'));
    });

    test('input is not string - map', () => {
      expect(() => toRna(new Map())).toThrow(new Error('Input is not a string'));
    });
  })

  test('empty rna sequence', () => {
    expect(toRna('')).toEqual('');
  });

  test('transcribes cytosine to guanine', () => {
    expect(toRna('C')).toEqual('G');
  });

  test('transcribes guanine to cytosine', () => {
    expect(toRna('G')).toEqual('C');
  });

  test('transcribes thymine to adenine', () => {
    expect(toRna('T')).toEqual('A');
  });

  test('transcribes adenine to uracil', () => {
    expect(toRna('A')).toEqual('U');
  });

  test('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRna('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });
})
