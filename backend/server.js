const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/tweets", (req, res) => {
  const tweets = [
    { id: "asdfh2323", message: "hi there" },
    { id: "faslje372", message: "bye there" },
  ];
  res.status(200).json({ message: "Fetched tweets successfully.", tweets });
});

app.post("/tweets", (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "Tweet added." });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
