const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/tweets", (req, res) => {
  const tweets = [
    { id: "asdfh2323", message: "hi there" },
    { id: "faslje372", message: "bye there" },
  ];
  res.status(200).json({ message: "Fetched tweets successfully.", tweets });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
