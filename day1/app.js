// Question 1

// let name = prompt("what is your name?");
// let age = prompt("what is your age?");

// alert(`${name} is ${age} years old`);

// Question 2
// let goldenString = prompt("Enter your string");

// if (
//   goldenString[0] == "A" ||
//   (goldenString[0] == "a" && goldenString.length == 5)
// ) {
//   console.log(
//     "Your string identifies as a golden string and you have to accept it."
//   );
// } else {
//   console.log("Sorry, your string is straight.");
// }

// Quesion 3
// Check wether the two numbers have same last digit or not
let numberOne = prompt("enter first number.");
let numberSecond = prompt("enter second number.");

if (numberOne.length - 1 == numberSecond.length - 1) {
  console.log("Both of them have same last number.");
} else {
  console.log("Both of them have different last numbrt");
}
