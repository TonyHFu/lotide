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

const isEven = function(num) {
  return num % 2 === 0;
};

const middle = function(arr) {
  let len = arr.length;
  let middleIndex = Math.floor(len / 2);
  if (len === 0 || len === 1 || len === 2) {
    return [];
  } else if (isEven(len)) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  } else {
    return [arr[middleIndex]];
  }
}

// Test Cases

// assertArraysEqual(middle([]),[]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle(["1", "2", "3"]),["2"]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);


