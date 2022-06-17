const mongoose = require("mongoose");

const specialiteSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
  //   user: {
  //     type: mongoose.Types.ObjectId,
  //     ref: 'User',
  // },
    categorie: 
    [  {
        type: mongoose.Types.ObjectId,
        ref: "Categorie",
      }
    ],
    
  
  // user : {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  //   role: "entreprise"
  // }
},
  { timestamps: true }
);

module.exports = mongoose.model("Specialite", specialiteSchema);
