const mongoose = require("mongoose");

const GenderSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
    },
  
},
  { timestamps: true }
);

module.exports = mongoose.model("Gender", GenderSchema);
