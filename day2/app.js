let text = "   h e l l o !     ";
let msg = "ApnaCollege";

// Trim and convert the following string into uppercase
console.log(text.trim().toUpperCase()); // H E L L O !

// slicing a string
console.log(msg.slice(4, 9)); //Apnege

// finding location of an alphabet
console.log(msg.indexOf("na")); // 3

// Replacing word
console.log(msg.replace("Apna", "subka")); // SubkaCollege

// Replacing an alphabet
console.log(msg.replace("l", "t")); // ApnaCotlege

let arr = ["january", "june", "march", "august"];

arr.shift(); // ["june", "march", "august"]
arr.shift(); // ["march", "august"]
console.log(arr);

arr.unshift("june"); // ["june", "march", "august"]
arr.unshift("january"); // ["january", "june", "march", "august"]
console.log(arr);

arr.pop(arr); // ["january", "june", "march"]
arr.pop(arr); // ["january", "june"]
console.log(arr);

arr.push("march"); // ["january", "june", "march"]
arr.push("august"); // ["january", "june","march", "august]
console.log(arr);

console.log(arr.indexOf("august")); // 3
console.log(arr.indexOf("August")); // -1 (because JS is case-sensitive)

console.log(arr.includes("august")); // true
console.log(arr.includes("September")); // false

let array = ["Adam", "Bob", "Carlos"];

arr.reverse(); // ["Carlos", "Bob", "Adam"]

console.log(arr.concat(array)); // ["january", "june","march", "august", "Adam", "Bob", "Carlos"]
// concat  method in array is not mutable which means by reversing an array it does not change the original array we have to make a variable to store the new array with the new changes

let cars = ["audi", "civic", "maruti", "toyota"];
