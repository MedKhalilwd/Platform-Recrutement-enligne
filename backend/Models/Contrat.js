const mongoose = require("mongoose");

const contratSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contrat", contratSchema);
