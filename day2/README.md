# String.methods()

** Strings in JavaScript **

- strings in JS are immutable which means it dosen't matter what string.method() you apply to it the original string will always be the same

msg = "ApnaCollege";

- Trim .trim()

  - trim method is use to erase all the extra spaces before and after a string.

- Slice .slice()

  - slice method is use to cut a string and return us a new string with a sliced values.
    - e.g. msg.slice(1, 5) // Apna
      // In the second option the last number is not included.

- IndexOf .indexOf()

  - .indexOf() method is use to gives us the index of letter we wanted.
    - e.g. msg.indexOf("na") // 2

- Replace .replace()

  - It is use to replace letter.
    - e.g. msg.replace("a", "b");
    - It will replace the letter a with b in a string.

- Repeat .repeat()
  - This method is used to repeat a latter for a set number of times.
    - .e.g msg.repeat(3) // ApnaCollegeApnaCollegeApnaCollege
