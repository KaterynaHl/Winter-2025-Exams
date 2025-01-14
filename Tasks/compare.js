// Compare two dictionaries

const compare = (firstDict, secondDict) => {
  let firstKeys = Object.keys(firstDict);
  let secondKeys = Object.keys(secondDict);
  if (firstKeys.length !== secondKeys.length) return false;

  return firstKeys.every((key) => firstDict[key] === secondDict[key]);
};

module.exports = compare;
