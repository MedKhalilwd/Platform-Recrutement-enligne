const mongoose = require("mongoose");

const LevelSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
    },
  
},
  { timestamps: true }
);

module.exports = mongoose.model("Level", LevelSchema);
