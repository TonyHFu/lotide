const head = require("../head");
const chai = require("chai");
const assert = chai.assert;

describe("head", function() {
  it("should return 1 when head([1,2,3]", function() {
    const actual = head([1, 2, 3]);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it ("returns 'Hello' from head(['Hello, 'Lighthouse', 'Labs'])", function() {
    const actual = head(["Hello", "Lighthouse", "Labs"]);
    const expected = "Hello";
    assert.strictEqual(actual, expected);
  });
  it ("returns 1 from head([1])", function() {
    const actual = head([1]);
    const expected = 1;
    assert.strictEqual(actual, expected);
  });
  it ("returns undefined from head([])", function() {
    const actual = head([]);
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});


