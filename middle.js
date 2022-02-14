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

module.exports = middle;

console.log(middle([1,2,3]));
console.log(middle([1]));
