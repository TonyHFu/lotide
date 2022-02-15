const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

describe("findKeyByValue", ()=>{
  it("should return 'drama' when given 'The Wire' as value", ()=>{
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = 'drama';
    assert.strictEqual(actual, expected);
  });
  it("should return undefined when given 'That '70s Show' as value", ()=>{
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });
});



