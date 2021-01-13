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
  return +(COLORS.indexOf(value[0]).toString() + COLORS.indexOf(value[1]));
};

module.exports = {
  decodedValue
};

