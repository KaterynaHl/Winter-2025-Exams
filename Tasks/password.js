// Refactor following solution
// Generate random password

const generatePassword = (alphabet, length) => {
  if (typeof alphabet !== "string" || alphabet.length === 0) {
    throw new Error("Alphabet must be a non-empty string.");
  }

  if (!Number.isInteger(length) || length < 0) {
    throw new Error("Length must be a non-negative integer.");
  }

  const getRandomIndex = () => Math.floor(Math.random() * alphabet.length);
  return Array.from(
    { length },
    () => alphabet[getRandomIndex(alphabet.length)]
  ).join("");
};

module.exports = generatePassword;
