const eqObjects = require("./eqObjects");

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

module.exports = eqObjects;

// TEST:

// assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
// assertObjectsEqual({}, {a: 1, b: 2});
// assertObjectsEqual({a: 1, b: 2}, {});
// assertObjectsEqual({}, {});
// assertObjectsEqual({1: "A", b: 2}, {a: 1, b: 2});
// assertObjectsEqual({1: "A", b: 2}, {1: "A", b: 2});
