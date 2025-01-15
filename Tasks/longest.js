// Refactor following solution
// Find longest string

const findLongestString = (line) => {
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

const longest = (line = []) => findLongestString(line);
module.exports = longest;
