// Compare two dictionaries

const compare = (firstDict, secondDict) => {
  const firstKeys = Object.keys(firstDict);
  const secondKeys = Object.keys(secondDict);
  if (firstKeys.length !== secondKeys.length) return false;

  return firstKeys.every((key) => firstDict[key] === secondDict[key]);
};

module.exports = compare;
