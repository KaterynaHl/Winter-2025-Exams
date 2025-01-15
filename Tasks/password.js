// Refactor following solution
// Generate random password

let generatePassword = (alphabet, length) => {
  const MAX = alphabet.length;
  let password = "";
  for (let i = 0; i < length; i++) {
    const getRandomIndex = (max) => Math.floor(Math.random() * max);
    const index = getRandomIndex(MAX);
    password = password + alphabet[index];
  }
  return password;
};

module.exports = generatePassword;
