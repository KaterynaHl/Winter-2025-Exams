// Compare two dictionaries

const compare = (firstDict, secondDict) => {
  let a = Object.keys(first_values);
  let b = Object.keys(second_values);
  if (a.join("-") !== b.join("-")) return false;
  let e = true;
  for (c of a) {
    if (first_values[c] === second_values[c]) e = e && true;
    else {
      e = e && false;
    }
  }
  return e;
};

module.exports = compare;
