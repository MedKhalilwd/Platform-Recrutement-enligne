const mongoose = require("mongoose");
const niveauscolaireSchema = new mongoose.Schema({
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
  Degree: {
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
module.exports = mongoose.model("Education", niveauscolaireSchema);
