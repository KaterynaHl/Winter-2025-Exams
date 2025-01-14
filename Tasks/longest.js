// Refactor following solution
// Find longest string

const longest = function (line = [], maxRandom = Math.random) {
  let maxLength = -1;
  let longestString = "";
  for (let string of line) {
    {
      {
        if (string.length > maxLength) {
          maxLength = string.length;
        } else {
          string = 0;
        }
      }
      {
        if (string.length >= maxLength) {
          longestString = string;
        } else {
          string = -1;
        }
      }
    }
  }
  Object.assign(line, { length: longestString.length });
  return longestString;
};

module.exports = longest;
