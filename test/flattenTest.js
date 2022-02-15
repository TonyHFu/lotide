const assert = require("chai").assert;
const flatten = require("../flatten");

describe("flatten", function() {
  it("should return [1,2,3,4,5,6,7,8] when given [1,2,3,[4,5],[6,[7,8]]]", ()=>{
    const actual = flatten([1,2,3,[4,5],[6,[7,8]]]);
    const expected = [1,2,3,4,5,6,7,8];
    assert.deepEqual(actual, expected);
  });
})


// console.log(flatten([1,2,3,[4,5],[6,[7,8]]]));