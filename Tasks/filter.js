// Refactor following solution
// Filter array by type name

const Filter = (array, typeName) => {
  if (!Array.isArray(array))
    throw new TypeError("First argument must be an array");

  return array.filter((item) => typeof item === typeName);
};

module.exports = Filter;
