// Refactor following solution
// Get month number

const monthNames = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

const getMonthNumber = (monthName) => {
  l = monthNames.length;
  for (let i = 0; i < l; i++) {
    if (monthName.toLowerCase().startsWith(monthNames[i])) return i + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
