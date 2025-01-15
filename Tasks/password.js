// Refactor following solution
// Generate random password

let generatePassword = (alphabet, length) => {
  if (typeof alphabet !== "string" || alphabet.length === 0) {
    throw new Error("Alphabet must be a non-empty string.");
  }

  if (!Number.isInteger(length) || length < 0) {
    throw new Error("Length must be a non-negative integer.");
  }

  const MAX = alphabet.length;
  let password = "";
  for (let i = 0; i < length; i++) {
    const getRandomIndex = (max) => Math.floor(Math.random() * max);
    const index = getRandomIndex(MAX);
    password += alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
