const countLetters = (str) => {
  const sentence = str.replace(/\s/g, "");
  const charater = {};

  for (let letter of sentence) {
    if (!charater[letter]) {
      charater[letter] = 1;
    } else {
      charater[letter]++;
    }
  }
  return Object.entries(charater).map((val) => parseInt(val) >= 2);
};

console.log(countLetters("I love I"));
