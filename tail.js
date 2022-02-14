const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.slice(1);
};

module.exports = tail;

