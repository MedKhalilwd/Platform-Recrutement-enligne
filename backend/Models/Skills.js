const mongoose = require("mongoose");

const SkillsSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
    },
    levels:{
        type: mongoose.Types.ObjectId,
        ref: "Skillslevel",
      },
      candidat: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
},
  { timestamps: true }
);

module.exports = mongoose.model("Skills", SkillsSchema);
