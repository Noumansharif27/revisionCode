// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// saveToDb(
//   "Nouman",
//   () => {
//     console.log("Data was successfully saved.");
//     saveToDb(
//       "Hi",
//       () => {
//         console.log("Data-2 was successfully saved");
//         saveToDb(
//           "Hello",
//           () => {
//             console.log("Data-3 was successfully saved");
//           },
//           () => {
//             console.log("Weak connection");
//           }
//         );
//       },
//       () => {
//         console.log("Weak connection");
//       }
//     );
//   },
//   () => {
//     console.log("Weak connection.");
//   }
// );

// the good way to get the above result is by sing promise
// function saveToDb(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Promised was fullfiled.");
//     } else {
//       reject("Promised was rejected.");
//     }
//   });
// }

// saveToDb("Hi")
//   .then(() => {
//     console.log("Data-1 was saved.");
//     return saveToDb("hello");
//   })
//   .then(() => {
//     console.log("Data-2 was saved.");
//     return saveToDb("hello world");
//   })
//   .then(() => {
//     console.log("Data-3 was saved.");
//   })
//   .catch(() => {
//     console.log("Network error.");
//   });

let h2 = document.querySelector("h2");
function colorChanging(color) {
  return new promise((resolved, rejected) => {
    setTimeout(() => {
      h2.style.color = color;
    }, 1000);
  });
}

let callingColor = async () => {
  colorChanging("red");
  colorChanging("orange");
  colorChanging("pink");
  colorChanging("yellow");
  colorChanging("blue");
};
