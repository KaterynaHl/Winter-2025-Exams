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
const monthMap = Object.fromEntries(
  monthNames.map((month, index) => [month, index + 1])
);

const getMonthNumber = (monthName) => {
  const normalizedMonth = monthName.toLowerCase();
  const monthIndex = monthNames.findIndex((month) =>
    normalizedMonth.startsWith(month)
  );
  if (monthIndex !== -1) {
    return monthIndex + 1;
  }
  return -1;
};

module.exports = getMonthNumber;
