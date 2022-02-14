const flatten = function(arr) {  
  let ans =[];
  for (let i = 0; i < arr.length; i++) {
    let temp;
    if (Array.isArray(arr[i])) {
      temp = flatten(arr[i]);
    } else {
      temp = arr[i];
    }
    // console.log("temp is", temp);
    ans = ans.concat(temp);
    // console.log("ans is", ans);
  }

  // console.log("final ans is", ans);
  return ans;
};

module.exports = flatten;

// console.log(flatten([1,2,3,[4,5],[6,[7,8]]]));