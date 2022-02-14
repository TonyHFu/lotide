const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([1,2,3]), 1);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);