const findAnagrams = (word, candidates) => {
  const sortWord = (word) => word
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  const sortedWord = sortWord(word);
  return candidates.filter(e => {
    return sortWord(e) === sortedWord
      && e.toLowerCase() !== word.toLowerCase();
    });
};

module.exports = {
  findAnagrams
};

