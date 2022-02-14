const middle = require("../middle");
const assert = require("chai").assert;

describe("middle", () => {
  it("should return [] if given []", () => {
    const actual = middle([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return [] if given [1]", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return [] if given [1, 2]", () => {
    const actual = middle([1, 2]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return [2] if given [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });
  it("should return ['2'] if given ['1', '2', '3']", () => {
    const actual = middle(['1', '2', '3']);
    const expected = ['2'];
    assert.deepEqual(actual, expected);
  });
  it("should return [2, 3] if given [1, 2, 3, 4]", () => {
    const actual = middle([1, 2, 3, 4]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
});

// assertArraysEqual(middle([]),[]);
// assertArraysEqual(middle([1]),[]);
// assertArraysEqual(middle([1, 2]),[]);
// assertArraysEqual(middle([1, 2, 3]),[2]);
// assertArraysEqual(middle(["1", "2", "3"]),["2"]);
// assertArraysEqual(middle([1, 2, 3, 4]),[2, 3]);