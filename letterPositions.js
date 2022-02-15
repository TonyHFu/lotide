// const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = function(sentence) {
  const result = {};
  // logic to update results here
  noSpace = sentence.split(" ").join("");
  for (let i = 0; i < noSpace.length; i++) {
    let letter = noSpace[i];
    if (result[letter]) {
      result[letter].push(i);
    } else {
      result[letter] = [i];
    }
  }
  return result;
};

module.exports = letterPositions;

