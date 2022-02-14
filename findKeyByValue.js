const findKeyByValue = function(dict, value) {
  for (let key in dict) {
    if (dict[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


// TEST:
// const bestTVShowsByGenre = { 
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);