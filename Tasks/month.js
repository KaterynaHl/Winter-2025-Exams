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
  const normalizedMonth = monthName.toLowerCase();
  for (const month of monthNames) {
    if (normalizedMonth.startsWith(month)) return monthNames.indexOf(month) + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
