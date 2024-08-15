/* this is the special file with the fixed special name "index.js"
when we want to export something from a diractory we can by using 
this special file which will require all the elements and will 
exists in the ame diractory */

let apple = require("./apple");
let banana = require("./banana");
let mango = require("./mango");

let fruits = [apple, banana, mango];

module.exports = fruits;
