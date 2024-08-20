const express = require("express");
const app = express();

let port = 3000;

app.listen(port, () => {
  console.log("app is listining to the port", port);
});

// app.use((req, res) => {
//   res.send("Wellcome to the practice Qs");
//   console.log("request received.");
// });

/* path: parameters is used to create custom pages and all of the parameters information is stored in `req`*/
// app.get("/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   res.send(`Wellcome to the page of ${username}.`);
//   console.log("request received.");
// });

// app.get("*", (req, res) => {
//   res.send("Your request is not avaliable.");
//   console.log("request received.");
// });

app.get("/search", (req, res) => {
  let { q } = req.query;
  console.log(q);
  if (!q) {
    res.send(`<h1>nothing searched</h1>`);
  }
  res.send(`<h1>searched for: ${q}</h1>`);
});
