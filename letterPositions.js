const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: ${array1} equals ${array2}`);
  } else {
    console.log(`Assertion Failed: ${array1} does not equal ${array2}`);
  }
};

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

// TEST:

assertArraysEqual(letterPositions("hello")["e"], [1]);
assertArraysEqual(letterPositions("hello")["l"], [2, 3]);
assertArraysEqual(Object.keys(letterPositions("")).length, 0);
console.log(letterPositions("hello")["a"]);
