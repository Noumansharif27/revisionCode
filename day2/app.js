let text = "   h e l l o !     ";
let msg = "ApnaCollege";

// Trim and convert the following string into uppercase
console.log("--------triming and Uppercaing----------");
console.log(text.trim().toUpperCase()); // H E L L O !

// slicing a string
console.log("------Slicing String------");
console.log(msg.slice(4, 9)); //Apnege

// finding location of an alphabet
console.log("-----Finding location of an alphabet-----");
console.log(msg.indexOf("na")); // 3

// Replacing word
console.log("-----Replacing word in string-----");
console.log(msg.replace("Apna", "subka")); // SubkaCollege

// Replacing an alphabet
console.log("-----Replacing an alphabet in string-----");
console.log(msg.replace("l", "t")); // ApnaCotlege

let arr = ["january", "june", "march", "august"];

console.log("-----Removing array's elements from front-----");
arr.shift(); // ["june", "march", "august"]
arr.shift(); // ["march", "august"]
console.log(arr);

console.log("-----adding an elements to the front of array-----");
arr.unshift("june"); // ["june", "march", "august"]
arr.unshift("january"); // ["january", "june", "march", "august"]
console.log(arr);

console.log("-----Removing array's elements from back-----");
arr.pop(arr); // ["january", "june", "march"]
arr.pop(arr); // ["january", "june"]
console.log(arr);

console.log("----adding elements to the back of array----");
arr.push("march"); // ["january", "june", "march"]
arr.push("august"); // ["january", "june","march", "august]
console.log(arr);

console.log("-----Finding an array's element index-----");
console.log(arr.indexOf("august")); // 3
console.log(arr.indexOf("August")); // -1 (because JS is case-sensitive)

console.log("--Finding wether an element in array is present or not--");
console.log(arr.includes("august")); // true
console.log(arr.includes("September")); // false

let array = ["Adam", "Bob", "Carlos"];

console.log("-----Reversing an array------");
console.log(array.reverse()); // ["Carlos", "Bob", "Adam"]

console.log("-----Merging two array------");
console.log(arr.concat(array)); // ["january", "june","march", "august", "Adam", "Bob", "Carlos"]
// concat  method in array is not mutable which means by reversing an array it does not change the original array we have to make a variable to store the new array with the new changes

let cars = ["audi", "civic", "maruti", "toyota"];

console.log("-----sicing array-----");
console.log(cars.slice()); // ["audi", "civic", "maruti", "toyota"] it is use to return full array.
console.log(cars.slice(2, 3)); // ["maruti"] the last index is not included.
console.log(cars.slice(2)); // ["audi", "civic", "maruti", "toyota"] it is use to return full array afther the given index.
console.log(cars.slice(-2)); // ["maruti", "toyota"] it is use to return the last element and the element next to it according to the given number.
console.log(cars.slice(-1)); // ["toyota"]
console.log(cars.slice(cars.length - 1)); // ["toyota"] it works same as fot the negative value.

let car = ["odi", "BMW", "Ferrari", "Mercedes", "Toyota"];
console.log("-----spicing array-----");
console.log(car.splice(1, 2, "Mehran")); // from index (1) delete (2) elements and place there "Mehra"
console.log(car);

console.log("-----Sorting strings elements of an array-----");
console.log(car.sort());

console.log("-----Sorting numeric elements of an array-----");
let marks = [100, 89, 99, 70, 64];
console.log(marks.sort());

// practice question
let months = ["january", "july", "march", "august"];
console.log("-----practice question-----");
months.splice(0, 2, "july", "june");
console.log(months);

let technologies = [
  "c",
  "c++",
  "HTML",
  "JavaScript",
  "Python0",
  "Java",
  "c#",
  "SQL",
].reverse();

console.log(technologies.indexOf("JavaScript"));
