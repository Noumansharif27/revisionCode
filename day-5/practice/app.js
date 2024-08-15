let url = "https://universities.hipolabs.com/search?name=pakistan";

// async function getUni() {
//   try {
//     let uni = await axios.get(url);
//     console.log(uni);
//   } catch (e) {
//     console.log("error -", e);
//   }
// }

async function getImage(data) {
  try {
    let result = await axios.get(url);
    console.log(result);
  } catch (e) {
    console.log(`error - ${e}`);
    return "No image found";
  }
}
