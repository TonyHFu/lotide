const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const result = {};
  str = str.split(" ").join("");
  for (let letter of str) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

assertEqual(countLetters("hello there")["e"], 3);
assertEqual(countLetters("hello there")["h"], 2);
assertEqual(Object.keys(countLetters("")).length, 0);
assertEqual(countLetters("hello there")["a"], undefined);
// assertEqual(countLetters("")[], );
// assertEqual(countLetters("")[], );
// assertEqual(countLetters("")[], );