const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
   
    offres: {
      type: mongoose.Types.ObjectId,
      ref: "Offre",
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favorite", favoriteSchema);
