const mongoose = require("mongoose");

const SkillslevelSchema = new mongoose.Schema(
  {
    levelname: {
        type: String,
        require: true,
      },
  
},
  { timestamps: true }
);

module.exports = mongoose.model("Skillslevel", SkillslevelSchema);
