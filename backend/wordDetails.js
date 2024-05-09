const mongoose = require("mongoose");
const WordDetailsSchema = new mongoose.Schema(
  {
    word: String,
    topic: String,
    title: String,
  },
  { collection: "WordDetails" }
);

module.exports = mongoose.model("WordDetails", WordDetailsSchema);
