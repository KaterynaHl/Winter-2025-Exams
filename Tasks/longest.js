// Refactor following solution
// Find longest string

const longest = (line = []) => {
  let maxLength = -1;
  let longestString = "";
  for (let string of line) {
    if (string.length > maxLength) {
      maxLength = string.length;
      longestString = string;
    }
  }
  return longestString;
};

module.exports = longest;
