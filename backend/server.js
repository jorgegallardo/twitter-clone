const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const Tweet = require("./models/tweet");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());
mongoose.connect(
  "mongodb+srv://jorge:<password>@cluster0.lx13r.mongodb.net/<dbname>?retryWrites=true&w=majority"
);

app.get("/tweets", (req, res) => {
  const tweets = [
    { id: "asdfh2323", message: "hi there" },
    { id: "faslje372", message: "bye there" },
  ];
  res.status(200).json({ message: "Fetched tweets successfully.", tweets });
});

app.post("/tweets", (req, res) => {
  const tweet = new Tweet({ message: req.body.message });
  console.log(tweet);
  res.status(201).json({ message: "Tweet added." });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
