const findKeyByValue = function(dict, value) {
  for (let key in dict) {
    if (dict[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


