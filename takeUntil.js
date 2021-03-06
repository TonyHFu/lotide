// const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = function(array, callback) {
  // ...
  const result = [];
  for (let x of array) {
    // console.log(x);
    if (callback(x)) {
      // console.log("breaking");
      break;
    } else {
      result.push(x);
      // console.log("new result", result);
    }
    
  }
  // console.log("final result", result);
  return result;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
// console.log('---');
// const results3 = takeUntil([], x => x === null);
// assertArraysEqual(results3, []);
// console.log('---');
// const results4 = takeUntil([1, 2, 3], x => x < 0);
// assertArraysEqual(results4, [1, 2, 3]);
// console.log('---');
// const results5 = takeUntil(['w', 'e', 'a'], x => x === 'w');
// assertArraysEqual(results5, []);
// console.log('---');
// const results6 = takeUntil([1, 2, 3], x => '');
// assertArraysEqual(results6, [1, 2, 3]);