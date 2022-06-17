const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
  {
    titretest: {
      type: String,
      require: true,
    },
    delai: {
        type: String,
      },
      questions: 
        {
          type: mongoose.Types.ObjectId,
          ref: "Question",
        },
      
      candidature: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Candidature",
        },
      ],
},
  { timestamps: true }
);

module.exports = mongoose.model("Test", testSchema);
