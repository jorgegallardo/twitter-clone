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
  Tweet.find().then((tweets) => {
    res.status(200).json({ message: "Fetched tweets successfully.", tweets });
  });
});

app.post("/tweets", (req, res) => {
  const tweet = new Tweet({ message: req.body.message });
  tweet.save();
  res.status(201).json({ message: "Tweet added." });
});

app.delete("/tweets/:id", (req, res) => {
  Tweet.deleteOne({ _id: req.params.id }).then((result) => {
    console.log(result);
  });
  res.status(200).json({ message: "Tweet deleted." });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000.");
});
