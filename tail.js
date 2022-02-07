const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};

assertEqual(tail([1,2,3]).length, [2,3].length);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail([1]).length, [].length);
assertEqual(tail([1])[0], [][0]);
assertEqual(tail([])[0], undefined);

