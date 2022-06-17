const mongoose = require("mongoose");
const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  yeardebut: {
    type: String,
  },
  yearfin: {
    type: String,
  },
  description: {
    type: String,
    trim: true,
  },
  Institute: {
    type: String,
  },
  candidat: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});
module.exports = mongoose.model("Experience", experienceSchema);
