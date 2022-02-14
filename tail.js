const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  return arr.slice(1);
};
console.log([].length===0? undefined: 1);

module.exports = tail;

