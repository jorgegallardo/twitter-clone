const mongoose = require("mongoose");

const tweetSchema = mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tweet", tweetSchema);
