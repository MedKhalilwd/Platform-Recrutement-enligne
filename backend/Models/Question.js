const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    questions: {
      type: String,
      require: true,
    },
    reponses: {
        type: String,
        require: true,
      },
      proposition: {
        type: String,
        require: true,
      },
      tests: 
        {
          type: mongoose.Types.ObjectId,
          require: true,
      },
    
},
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
