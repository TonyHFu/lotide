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