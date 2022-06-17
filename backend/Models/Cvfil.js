const mongoose = require("mongoose");

const CvSchema = new mongoose.Schema(
  {
    filecv: {
      type: String,
      require: true,
    },
    candidat: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
},
  { timestamps: true }
);

module.exports = mongoose.model("Cv", CvSchema);
