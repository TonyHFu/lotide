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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    // console.log(object1[key]);
    // console.log(object2[key]);
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
          // console.log("arrays are false");
          return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} equals ${inspect(expected)}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} does not equal ${inspect(expected)}`);
    
  }
};

// TEST:

assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2}, {});
assertObjectsEqual({}, {});
assertObjectsEqual({1: "A", b: 2}, {a: 1, b: 2});
assertObjectsEqual({1: "A", b: 2}, {1: "A", b: 2});