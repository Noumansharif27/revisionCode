# String.methods()

**Strings in JavaScript** : strings in JS are immutable which means it dosen't matter what string.method() you apply to it the original string will always be the same as it was before the method.

- **trim()**

  -----trim method is use to erase all the extra spaces before and after a string.-----

  - It is not able to remove the extra spaces between a string.
  - **e.g. :** <br />
    let message = " H I !";
  - **output :** <br />
    H I!

- **slice()**

  -----slice() method is use to cut a string and return us a new string with a sliced values.-----

  - **e.g. :** <br />
    let msg = "2ApnaCollege"; <br />
    msg.slice(1, 5) // In the second option the last number is not included.
  - **output :** <br />
    Apna

- **indexOf()**

  -----indexOf() method is use to gives us the index of letter we wanted.-----

  - **e.g. :** <br />
    let msg = "ApnaCollege;<br />
    msg.indexOf("na")
  - **output :**<br />
    2

- **replace()**

  -----repeat() is use to replace letter.-----

  - **e.g. :** <br />
    let msg = "Apple";<br />
    msg.replace("a", "b");
  - **output :** <br />
    bapple

- **repeat()**

  -----This method is used to repeat a latter for a set number of times.-----

  - **.e.g :** <br />
    let latter = "coding"; <br />
    latter.repeat(3);
  - **output :** <br />
    codingcodingcoding

##

# Array[]

----A linear collection of data/things.-----

**Arrays are Mutable** : it means every change you made to an array will affect the original array.

**e.g. :** <br />
let arr = ["Adam", "Bob", "Carlos"]; <br />
arr[0] = "Diana"; <br />
console.log(arr);

**output :** <br />
["Diana", "Bob", "Carlos"]

- **shift :**

  -----Removing array's elements from front.-----

  - **e.g. :**<br />
    let arr = ["january", "june", "march", "august"]; <br />
    arr.shift(); <br />
    arr.shift(); <br />
    console.log(arr);
  - **output :**<br />
    ["march", "august"]

- **unshift :**

  -----adding elements to front of an array.-----

  - **e.g. :**<br />
    let arr = ["march", "august"]; <br />
    arr.unshift("june"); <br />
    arr.unshift("january"); <br />
    console.log(arr);
  - **output :**<br />
    ["january", "june", "march", "august"]

- **pop :**

  -----removing elements from back of an array.-----

  - **e.g. :**<br />
    let arr = ["january", "june", "march", "august"]; <br />
    arr.pop(); <br />
    arr.pop(); <br />
    console.log(arr);
  - **output :**<br />
    ["january", "june"]

- **push :**

  -----adding elements to back of an array.-----

  - **e.g. :**<br />
    let arr = ["january", "june"]; <br />
    arr.push(); <br />
    arr.push(); <br />
    console.log(arr);
  - **output :**<br />
    ["january", "june", "march", "august"]

- **indexOf :** <br />
  -----Finding an array's element index----- <br />

  - **e.g.** <br />
    console.log(arr.indexOf("august"));
  - **output** <br />
    3 <br />
  - **e.g.** <br />
    console.log(arr.indexOf("August"));
  - **output** <br />
    -1 // because JS is case-sensitive

- **includes** <br>
  ----Finding wether an element in array is present or not----

  - **e.g. :** <br>
    console.log(arr.includes("august")); <br>
    console.log(arr.includes("September"));
  - **output :** <br>
    true <br>
    false

- **splice :**

  -----use to remove/replace and add element in place. this method will affect the original copy of an array.-----

  - **syntax :** splice(start, deleteCount, item(0), item(n));
  - **e.g. :** <br />
    let cars = ["odi", "BMW", "Ferrari", "Mercedes","Toyota"]; <br />
    cars.splice(1 , 2, "Mehran"); // from index (1) delete
    (2) elements and place there "Mehra" <br />
  - **output :** <br />
    ["odi","Mehran", "Mercedes", "Toyota"]

- **sort :**

  -----this method is use to sort an array. <br /> **IMP :** this method of array only works with alphabets and characters we cannot use this method on numbers. the reason
  is that because in deep down this method first convert array's elements into strings and then converts them into order. it means it uses it's **UTFC** number to determine which word/character would accupied an index first.7----- <br />

  - **e.g. :** <br />
    let marks = [100, 89, 99, 70, 64]; <br />
    marks.sort(); <br />
  - **output :** <br />
     [100, 64, 70, 89, 99]

  - **e.g. :** <br />
    let cars = ["odi", "BMW", "Ferrari", "Mercedes", "Toyota"]; <br />
    cars.sort();
  - **output :** <br />
    ['BMW', 'Mehran', 'Mercedes', 'Toyota', 'odi']

##

# Object Literels {}

**Object Literels :** An object is created as a pair of key : value incide a pair of curly-braces {}, and we can access it's value using same array's method but instead of giving the index value we have to give it the key-name.

**Note :** It is important to clearly know the diffrence similarities and diffrences between object Lliterels and Arrays.

- **Similarities :** Object literels and Arrays havs so much common in them like we know that we cannot set the value of an Array to any variable because the arrys variable have only knows it refrence (Memory Location / address), This phenomina works same for an Object.

- **Diffrences :** object and object literels as they look similar but have clearly diffrent meanings.An object is the type of an Array while an object literels means, creating a new and unique object own yor own.

**syntax :** <br>
let obj = { <br>
key: value, <br>
key: valur, <br>
}

- **e.g. :** <br>
  let obj = { <br>
  name: "Aman", <br>
  class: "I.C.S", <br>
  gender: "male", <br>
  }; <br>
  obj["gender"];
  obj.name;

- **output :** <br>
  male <br>
  Aman

#

# Functions

**Functions :** A set of code which can be used mutiple time just by calling it.

**syntax :** <br>

- function name () { <br>
  // things to do <br>
  }

- () => { <br>
  // things to do <br>
  } <br>

  this is called an anonymous function.

- let sum = function () { <br>
  // things to do <br>
  } <br>

  let sum = () => { <br>
  // Things to do <br>
  }<br>

**Higher Order Functions :**

- A function which takes one or more function as an argument is called a higher order function.
- A function which returns one or more function is called a higher order function.
