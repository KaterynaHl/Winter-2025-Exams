// Compare two dictionaries

const compare = (firstDict, secondDict) => {
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  if (firstKeys.join("-") !== secondKeys.join("-")) return false;
  let isEqual = true;
  for (c of firstKeys) {
    if (firstDict[c] === secondDict[c]) isEqual = isEqual && true;
    else {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = compare;
