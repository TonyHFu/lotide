const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("letterPositions", ()=>{
  it("shoulder return {h: [0], e: [1], l: [2,3], o: [4]}", ()=>{
    const actual = letterPositions("hello");
    const expected = {h: [0], e: [1], l: [2,3], o: [4]};
    assert.deepEqual(actual, expected);
  });
});

