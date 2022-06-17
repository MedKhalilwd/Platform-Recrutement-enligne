const mongoose = require("mongoose");

const typesOfferSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
    },
    // offres: [
    //     {
    //       type: mongoose.Types.ObjectId,
    //       ref: "Offre",
    //     },
    //   ],
},
  { timestamps: true }
);

module.exports = mongoose.model("TypesOffer", typesOfferSchema);
