class RotationalCipher {
  static alphabet = 'abcdefghijklmnopqrstuvwxyz';

  static rotate(text, key) {
    const cipher = [];

    for (let i = 0; i < text.length; i++) {
      const character = text.charAt(i);

      if (character === ' ' || /[\d|\!\.',]/.test(character)) {
        cipher[i] = character;
        continue;
      }

      const isCharUpper = character === character.toUpperCase();
      const letterIndex = this.alphabet.indexOf(character.toLowerCase());
      const cipherKey = letterIndex + key;

      const index = cipherKey >= this.alphabet.length - 1
        ? cipherKey % this.alphabet.length
        : cipherKey;

      cipher[i] = isCharUpper
        ? this.alphabet.charAt(index).toUpperCase()
        : this.alphabet.charAt(index);
    }

    return cipher.join('');
  }
}

module.exports = {
  RotationalCipher
};

