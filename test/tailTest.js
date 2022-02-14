const assertEqual = require("../assertEqual");
const tail = require("../tail");

assertEqual(tail([1,2,3]).length, [2,3].length);
assertEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
assertEqual(tail([1]).length, [].length);
assertEqual(tail([1])[0], [][0]);
assertEqual(tail([])[0], undefined);

