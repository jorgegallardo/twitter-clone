const express = require("express");
const app = express();

app.use((req, res) => {
  res.json({ message: "hi there" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
