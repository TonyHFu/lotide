const exp = require("constants");
const assertEqual = require("../assertEqual");
const tail = require("../tail");
const assert = require("chai").assert;

// console.log(assert.deepEqual([1,[2,3],4,[5,[6,7]],8,[9,10]], [1,[2,3],4,[5,[6,7]],8,[9,10]]));


describe("Tail", function() {
  it("should return [2, 3] from [1, 2, 3]", function() {
    const actual = tail([1, 2, 3]);
    const expected = [2, 3];
    assert.deepEqual(actual, expected);
  });
  it('should return ["Lighthouse", "Labs"] from ["Hello", "Lighthouse", "Labs"]', function() {
    const actual = tail(["Hello", "Lighthouse", "Labs"]);
    const expected = ["Lighthouse", "Labs"];
    assert.deepEqual(actual, expected);
  });
  it("should return [] from [1]", function() {
    const actual = tail([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });
  it("should return undefined from []", function() {
    const actual = tail([]);
    const expected = undefined;
    assert.deepEqual(actual, expected);
  });
  
});

// assertEqual(tail([1,2,3]).length, [2,3].length);
// assertEqual(tail( ["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
// assertEqual(tail([1]).length, [].length);
// assertEqual(tail([1])[0], [][0]);
// assertEqual(tail([])[0], undefined);

