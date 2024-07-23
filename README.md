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

**Arrays are Mutable** : it means every change you made to an array will affect the original array. -**e.g.**

- **e.g.**  
  let arr = ["Adam", "Bob", "Carlos"];
  arr[0] = "Diana";
  console.log(arr);

- **output**
  ["Diana", "Bob", "Carlos"]
