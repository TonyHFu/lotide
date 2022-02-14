// const assertArraysEqual = require("./assertArraysEqual");

const without = function(source, itemsToRemove) {
  const arr = [];
  for (let i = 0; i < source.length; i++) {
    let isIn = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        isIn = true;
        break;
      }
    }
    if (!isIn) {
      arr.push(source[i]);
    }
  }
  // console.log(arr);
  
  return arr;
};

module.exports = without;
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

// assertArraysEqual(without(["1", "2", "3"], []), ["1", "2", "3"]);

// assertArraysEqual(without([], [1, 2, "3"]), []);

// assertArraysEqual(without([], []), []);

// assertArraysEqual(without([1, 1, 0], [true, false]), [1, 1, 0]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);