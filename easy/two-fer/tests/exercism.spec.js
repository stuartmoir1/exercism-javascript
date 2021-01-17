const { twoFer } = require('../exercism');

describe('Two Fer', () => {
  test('No name given', () => {
    expect(twoFer()).toEqual('One for you, one for me.');
  });

  test('A name given', () => {
    expect(twoFer('Alice')).toEqual('One for Alice, one for me.');
  });

  test('Another name given', () => {
    expect(twoFer('Bob')).toEqual('One for Bob, one for me.');
  });
});

