// const assertArraysEqual = require("./assertArraysEqual");

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'] );
// assertArraysEqual(map([1, 2, 3], x => x + 1), [2, 3, 4] );
// assertArraysEqual(map([], x => x[0]), []);
// assertArraysEqual(map(['g', 1, 'a'], x => x + 1), ['g1', 2, 'a1']);
// assertArraysEqual(map([1, 2, 3], x => ''), ['', '', '']);