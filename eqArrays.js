const eqObjects = require("./eqObjects");

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
  const element1 = array1[0];
  const element2 = array2[0];
  
  if (Array.isArray(element1) && Array.isArray(element2)) {
    // console.log("both first elements are arrays");
    let arraysEqual = eqArrays(element1, element2);
    // console.log("arraysEqual", arraysEqual);
    // console.log(arraysEqual? "first element arrays equal": "first element arrays not equal");
    return arraysEqual && eqArrays(array1.slice(1), array2.slice(1));
  } else if (Array.isArray(element1) || Array.isArray(element2)) {
    // console.log("only one first element is array");
    return false;
  } else if (typeof element1 === "object" && typeof element2 === "object") {
    const eqObjects = require("./eqObjects");
    // console.log("both first elements are objects");
    let objectEqual = eqObjects(element1, element2);
    // console.log(objectEqual? "first element object equal": "first element object not equal");
    return objectEqual && eqArrays(array1.slice(1), array2.slice(1));
  } else if (typeof element1 === "object" || typeof element2 === "object") {
    // console.log("only one first element is object");
    return false;
  } else {
    // console.log("neither elements are objects or arrays");
    let elementsEqual = element1 === element2;
    // console.log(elementsEqual? "first element equal": "first element not equal");
    return elementsEqual && eqArrays(array1.slice(1), array2.slice(1));
  }

};

module.exports = eqArrays;

