const mongoose = require("mongoose");

const competenceSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
      trim: true,
    },

    description: {
      type: String,
      require: true,
    },
    niveau: {
      type: String,
      require: true,
    },
    offres: {
      type: mongoose.Types.ObjectId,
      ref: "Offre",
      require: true
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Competence", competenceSchema);
