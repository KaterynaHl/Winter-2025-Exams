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
  const matchedMonth = Object.keys(monthMap).find((month) =>
    normalizedMonth.startsWith(month)
  );
  return matchedMonth ? monthMap[matchedMonth] : -1;
};

module.exports = getMonthNumber;
