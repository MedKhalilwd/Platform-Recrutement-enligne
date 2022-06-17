const mongoose = require("mongoose");

const CitySchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
    },
  
},
  { timestamps: true }
);

module.exports = mongoose.model("City", CitySchema);
