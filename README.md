# String.methods()

**Strings in JavaScript** : strings in JS are immutable which means it dosen't matter what string.method() you apply to it the original string will always be the same as it was before the method.

let txt = " HI! ";
let msg = "ApnaCollege";

- trim()

  - trim method is use to erase all the extra spaces before and after a string.

  - It is not able to remove the extra spaces between a string.
    - **e.g.**
      - let message = " H I !";
    - **output**
      - H I!

- slice()

  - .slice() method is use to cut a string and return us a new string with a sliced values.

    - **e.g.**
      - let msg = "2ApnaCollege";
        msg.slice(1, 5)
    - **output**
      - Apna
        // In the second option the last number is not included.

- indexOf()

  - .indexOf() method is use to gives us the index of letter we wanted.

    - **e.g.**
      - let msg = "ApnaCollege;
        msg.indexOf("na")
      - **output**
        2

- replace()

  - .repeat() is use to replace letter.

    - **e.g.**
      let msg = "Apple";
      msg.replace("a", "b");
    - **output**
      bapple

- repeat()

  - This method is used to repeat a latter for a set number of times.

    - **.e.g**
      let latter = "coding"
      latter.repeat(3)
    - **output**
      codingcodingcoding

## Array

**A linear collection of data/things.**

let student = [Adam, Bob, Carlos];

**Arrays are Mutable** : it means every change you made to an array will affect the original array.

- **e.g.**  
  let arr = ["Adam", "Bob", "Carlos"];
  arr[0] = "Diana";
  console.log(arr);

- **output**
  ["Diana", "Bob", "Carlos"]

- splice :

  - use to remove/replace and add element in place. this method will affect the original copy of an array.
  - **syntax :** splice(start, deleteCount, item(0), item(n));
  - **e.g.**
    let cars = ["odi", "BMW", "Ferrari", "Mercedes", "Toyota"];
    cars.splice(1 , 2, "Mehran"); // from index (1) delete (2) elements and place there "Mehra"
  - **output**
    ["odi","Mehran", "Mercedes", "Toyota"]

- **sort :**

  - this method is use to sort an array. **IMP :** this method of array only works with alphabets and characters we cannot use this method on numbers. the reason
    is that because in deep down this method first convert array's elements into strings and then converts them into order. it means it uses it's **UTFC** number to determine which word/character would accupied an index first.7
  - **e.g.**
    let marks = [100, 89, 99, 70, 64];
    marks.sort();
  - **output**
     [100, 64, 70, 89, 99]

  - **e.g.**
    let cars = ["odi", "BMW", "Ferrari", "Mercedes", "Toyota"];
    cars.sort();
  - **output**
    ['BMW', 'Mehran', 'Mercedes', 'Toyota', 'odi']
