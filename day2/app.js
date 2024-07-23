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
