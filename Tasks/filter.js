// Refactor following solution
// Filter array by type name

const Filter = (T, t) => {
  const result = T.filter((item) => typeof item === t);
  return result;
};

module.exports = Filter;
