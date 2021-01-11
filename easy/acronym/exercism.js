const parse = (phrase) => {
  return phrase
    .replace(/_/, '')
    .split(/[ -]/)
    .map(e => e.charAt(0).toUpperCase())
    .join('');
};

module.exports = {
  parse
};

