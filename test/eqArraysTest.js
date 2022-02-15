const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("eqArrays", ()=>{
  it("should return true for eqArrays([1, 2, 3], [1, 2, 3])", ()=>{
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    assert.isTrue(actual);
  });
  it("should return false for eqArrays([1, 2, 3], [3, 2, 1])", ()=>{
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    assert.isFalse(actual);
  });
  it('should return true for eqArrays(["1", "2", "3"], ["1", "2", "3"])', ()=>{
    const actual = eqArrays(["1", "2", "3"], ["1", "2", "3"]);
    assert.isTrue(actual);
  });
  it('should return false for eqArrays(["1", "2", "3"], ["1", "2", 3])', ()=>{
    const actual = eqArrays(["1", "2", "3"], ["1", "2", 3]);
    assert.isFalse(actual);
  });
  
});




 
