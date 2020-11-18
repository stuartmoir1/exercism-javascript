const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

const decodedValue = (value) => {
  return Number(value
    .map(e => COLORS.indexOf(e).toString())
    .slice(0, 2)
    .join('')
  );
};

module.exports = {
  decodedValue
}

