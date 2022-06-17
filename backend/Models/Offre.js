const mongoose = require("mongoose");
// const ItemTestQuestionSchema = new mongoose.Schema({
//   question: {
//     type: mongoose.Types.ObjectId,
//     ref: "Question",
//   },
//   questions: {
//     type: String,
//     required: true,
//   },
//   reponses: {
//     type: String,
//     required: true,
//   },
//   proposition: {
//     type: String,
//     required: true,
//   },
// });
// const ItemOffreTestSchema = new mongoose.Schema({
//   test: {
//     type: mongoose.Types.ObjectId,
//     ref: "Test",
//   },
//   titretest: {
//     type: String,
//     required: true,
//   },
//   delai: {
//     type: String,
//     required: true,
//   },
//   questions: [ItemTestQuestionSchema],
// });
const offreSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      require: true,
      minlength: 4,
    },
    // type: {
    //   type: String,
    //   require: true,
    // },
    description: {
      type: String,
      require: true,
    },
    dateexpiration: {
      type: String,
      require: true,
    },
    KeyResponsibilities: {
      type: String,
    },
    Experience: {
      type: String,
    },
    Salary:
    {
      type: String,
    },
    // lieu: {
    //   type: String,
    //   require: true,
    // },

    competence: {
      type: String,
      require: true,
    },
    odhercompetence:[
      {
        type: String,
      },

    ],

    // contrat: {
    //   type: String,
    //   require: true,
    // },
    specialites: {
      type: mongoose.Types.ObjectId,
      ref: "Specialite",
    },
    tests: {
      type: mongoose.Types.ObjectId,
      ref: "Test",
    },
    questions: {
      type: mongoose.Types.ObjectId,
      ref: "Question",
    },
    categories:[ {
      type: mongoose.Types.ObjectId,
      ref: "Categorie",
    },],
    confirmeoffre: {
      type: Boolean,
      default: false,
    },
    entrepris: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    typesoffers:{
      type: mongoose.Types.ObjectId,
      ref: "TypesOffer",
    },
    city:{
      type: mongoose.Types.ObjectId,
      ref: "City",
    },
    contrat:{
      type: mongoose.Types.ObjectId,
      ref: "Contrat",
    },
    gender:{
      type: mongoose.Types.ObjectId,
      ref: "Gender",
    },
    level:{
      type: mongoose.Types.ObjectId,
      ref: "Level",
    },
    // tests: [ItemOffreTestSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Offre", offreSchema);
