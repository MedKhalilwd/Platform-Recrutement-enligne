const mongoose = require("mongoose");

const lieuSchema = new mongoose.Schema(
  {
    nom: {
        type: String,
        require: true,
        minlength: 2,
        trim: true,
      },
      offres: {
        type: mongoose.Types.ObjectId,
        ref: "Offre",
        require: true
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lieu", lieuSchema);
