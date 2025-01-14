// Compare two dictionaries

const compare = (firstDict, secondDict) => {
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  if (
    firstKeys.length !== secondKeys.length ||
    !firstKeys.every((key) => secondKeys.includes(key))
  )
    return false;
  for (c of firstKeys) {
    if (firstDict[c] === secondDict[c]) isEqual = isEqual && true;
    else {
      isEqual = isEqual && false;
    }
  }
  return isEqual;
};

module.exports = compare;
