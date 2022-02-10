const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🤬🤬Assertion Failed: ${actual} !== ${expected}`);
  }
};
const eqArrays = function(array1, array2) {
  // console.log("array1", array1);
  // console.log("array2", array2);
  if (array1.length !== array2.length) {
    // console.log("array lengths not equal");
    return false;
  }
  if (array1.length === 0 && array2.length === 0) {
    // console.log("reached end of arrays");
    return true;
  }
  const element1 = array1.shift();
  const element2 = array2.shift();
  
  if (Array.isArray(element1) && Array.isArray(element2)) {
    // console.log("both first elements are arrays");
    let arraysEqual = eqArrays(element1, element2);
    // console.log("arraysEqual", arraysEqual);
    // console.log(arraysEqual? "first element arrays equal": "first element arrays not equal");
    return arraysEqual && eqArrays(array1, array2);
  } else if (Array.isArray(element1) || Array.isArray(element2)) {
    // console.log("only one first element is array");
    return false;
  } else if (typeof element1 === "object" && typeof element2 === "object") {
    // console.log("both first elements are objects");
    let objectEqual = eqObjects(element1, element2);
    // console.log(objectEqual? "first element object equal": "first element object not equal");
    return objectEqual && eqArrays(array1, array2);
  } else if (typeof element1 === "object" || typeof element2 === "object") {
    // console.log("only one first element is object");
    return false;
  } else {
    // console.log("neither elements are objects or arrays");
    let elementsEqual = element1 === element2;
    // console.log(elementsEqual? "first element equal": "first element not equal");
    return elementsEqual && eqArrays(array1, array2);
  }

};

const eqObjects = function(object1, object2) {
  // console.log("object1", object1);
  // console.log("object2", object2)
  
  
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  
  // console.log("keys1", keys1);
  // console.log("keys2", keys2);

  if (keys1.length !== keys2.length) {
    // console.log("key lengths not equal"); 
    return false;
  }
  if (keys1.length === 0 && keys2.length === 0) {
    // console.log("reached end of object")
    return true;
  }

  let firstKey = keys1[0]
  // console.log("firstKey", firstKey);
  if (!keys2.includes(firstKey)) {
    // console.log("key in first not in second");
    return false;
  }


  let element1 = object1[firstKey];
  let element2 = object2[firstKey];

  // console.log("element1", element1);
  // console.log("element2", element2);
  
  if (Array.isArray(element1) && Array.isArray(element2)) {
    // console.log("both first elements are arrays");
    let arraysEqual = eqArrays(element1, element2);
    // console.log("arraysEqual", arraysEqual);
    delete object1[firstKey];
    delete object2[firstKey];
    return arraysEqual && eqObjects(object1, object2);
  } else if (Array.isArray(element1) || Array.isArray(element2)) {
    // console.log("only one first element is array");
    return false;
  } else if (typeof element1 === "object" && typeof element2 === "object") {
    // console.log("both first elements are objects");
    let objectEqual = eqObjects(element1, element2);
    delete object1[firstKey];
    delete object2[firstKey];
    return objectEqual && eqObjects(object1, object2);
  } else if (typeof element1 === "object" || typeof element2 === "object") {
    // console.log("only one first element is object");
    return false;
  } else {
    // console.log("neither elements are objects or arrays");
    let elementsEqual = element1 === element2;
    delete object1[firstKey];
    delete object2[firstKey];
    return elementsEqual && eqObjects(object1, object2);
  }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false

assertEqual(eqObjects({ a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 }, { a: { z: {c: 2, t: [1, 2, [3, 4]],d: 5, e: {x: 9}} }, b: 2 }), true); // => true

assertEqual(eqObjects({ a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 }, { a: { z: {c: 2, t: [1, 2, [{a: 1, b: [1]}, 4]],d: 5, e: {x: 9}} }, b: 2 }), true); // => true