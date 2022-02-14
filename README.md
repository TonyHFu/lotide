# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install tony.hao.fu/lotide`

**Require it:**

`const _ = require('tony.hao.fu/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: asserting that two arrays are the same (supports nesting)
* `assertEqual(actual, expected)`: asserting that two parameters are equal (does not support objects or arrays) using `===`
* `assertObjectsEqual(object1, object2)`: asserting that two objects are equal (supports nesting)
* `countLetters(str)`: counts occurence of letters in string
* `countOnly(allItems, itemsToCount)`: given an array `allItems`, returns obj with key: value pairs representing elements in array and the number of times that element occurs in the array but only for elements that appear in array `itemsToCount`
* `eqArrays(array1, array2)`: returns boolean of whether the 2 arrays are equal (supports nesting)
* `eqObjects(object1, object2)`: returns boolean of whether 2 objects are equal (supports nesting)
* `findKey(dict, callback)`: returns key value for the first property of `dict` object where `callback` returns `true`
* `findKeyByValue(dict, value)`: returns key for the first property of `dict` where the value is equal to `value`
* `flatten(arr)`: flattens a nested array
* `head(arr)`: returns the first element of an array
* `letterPositions(sentence)`: returns an object with keys equal to the letters of the string `sentence` and values equal to an array containing the indices at which those letters appear in `sentence` with the white-space removed
* `map(array, callback)`: returns array with mapped values using `callback` function
* `middle(arr)`: returns array containing the middle element(s) of array `arr`
* `tail(arr)`: returns array containing the elements of array `arr` not including the first element
* `takeUntil(array, callback)`: returns array of elements from array `array` until `callback(element)` returns true. Does not include that value 
* `without(source, itemsToRemove)`: returns array with elements from array `source` but with elements contained in array `itemsToRemove` removed.