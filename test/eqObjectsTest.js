const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("eqObjects", ()=>{
  it("should return true given ab = { a: '1', b: '2' } and ba = { b: '2', a: '1' }", ()=>{
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const actual = eqObjects(ab, ba);
    assert.isTrue(actual);
  });
  it("should return false given ab = { a: '1', b: '2' } and abc = { a: '1', b: '2', c: '3' }", ()=>{
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    const actual = eqObjects(ab, abc);
    assert.isFalse(actual);
  });
  it("should return true given cd = { c: '1', d: ['2', 3] } and dc = { d: ['2', 3], c: '1' }", ()=>{
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    const actual = eqObjects(cd, dc);
    assert.isTrue(actual);
  });
  it("should return false given cd = { c: '1', d: ['2', 3] } and cd2 = { c: '1', d: ['2', 3, 4] }", ()=>{
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: '1', d: ['2', 3, 4] };
    const actual = eqObjects(cd, cd2);
    assert.isFalse(actual);
  });
  it("should return true given x = { a: { z: 1 }, b: 2 } and y = { a: { z: 1 }, b: 2 }", ()=>{
    const x = { a: { z: 1 }, b: 2 };
    const y = { a: { z: 1 }, b: 2 };
    const actual = eqObjects(x, y);
    assert.isTrue(actual);
  });
  it("should return false given x = { a: { y: 0, z: 1 }, b: 2 } and y = { a: { z: 1 }, b: 2 }", ()=>{
    const x = { a: { y: 0, z: 1 }, b: 2 };
    const y = { a: { z: 1 }, b: 2 };
    const actual = eqObjects(x, y);
    assert.isFalse(actual);
  });
  it("should return false given x = { a: { y: 0, z: 1 }, b: 2 } and y = { a: 1, b: 2 }", ()=>{
    const x = { a: { y: 0, z: 1 }, b: 2 };
    const y = { a: 1, b: 2 };
    const actual = eqObjects(x, y);
    assert.isFalse(actual);
  });
  it("should return true given x = { a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 } and y = { a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 }", ()=>{
    const x = { a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 };
    const y = { a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 };
    const actual = eqObjects(x, y);
    assert.isTrue(actual);
  });
  it("should return true given x = { a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 }, b: 2 } and y = { a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 }", ()=>{
    const x = { a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 };
    const y = { a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 };
    const actual = eqObjects(x, y);
    assert.isTrue(actual);
  });
});





