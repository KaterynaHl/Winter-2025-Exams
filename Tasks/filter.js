// Refactor following solution
// Filter array by type name

const Filter = (array, typeName) => {
  if (!Array.isArray(array))
    throw new TypeError("First argument must be an array");
  if (typeof typeName !== "string")
    throw new TypeError("Second argument must be a string");

  return array.filter((item) => typeof item === typeName);
};

module.exports = Filter;
