// Refactor following solution
// Filter array by type name

const Filter = (array, typeName) => {
  const result = array.filter((item) => typeof item === typeName);
  return result;
};

module.exports = Filter;
