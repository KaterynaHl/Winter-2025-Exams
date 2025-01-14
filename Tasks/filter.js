// Refactor following solution
// Filter array by type name

const Filter = (array, typeName) =>
  array.filter((item) => typeof item === typeName);

module.exports = Filter;
