// Refactor following solution
// Find longest string

const findLongestString = (line) => {
  let maxLength = -1;
  let longestString = "";

  line.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
};

const longest = (line = []) => findLongestString(line);
module.exports = longest;
