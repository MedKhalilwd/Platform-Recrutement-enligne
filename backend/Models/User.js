const mongoose = require("mongoose");
const niveauscolaireSchema = new mongoose.Schema({
  nom: {
    type: String,
    trim: true,
    required: true,
  },
  annee: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  file: {
    type: String,
    required: false,
  },
});

const socialmediaSchema = new mongoose.Schema({
  nom: {
    type: String,
    trim: true,
    required: true,
  },
  lien: {
    type: String,
    trim: true,
    required: false,
  },
});


const userSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      require: true,
      trim: true,
    },
    prenom: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    },
    address: {
      type: String,
      require: true,
    },
    phone: {
      type: Number,
      require: true,
      trim: true,
    },
    image: {
      type: String,
      require: true,
    },
    civilite: {
      type: String,
      require: true,
    },
    domaine: {
      type: String,
      require: true,
    },
    TeamSize: {
      type: String,
      require: true,
    },
    Achivment: {
      type: String,
      require: true,
    },
    About: {
      type: String,
      require: true,
    },
    Country: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    fileCv: {
      type: String,
      require: true,
    },
    datenaissance: {
      type: String,
      require: true,
    },
    categorie: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Categorie",
      },
    ],
    niveauscolaire: [{ type: niveauscolaireSchema, required: false }],
    socialmedia: [{ type: socialmediaSchema, required: false }],
    specialites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Specialite",
      },
    ],
    offres: [
        {
          type: mongoose.Types.ObjectId,
          ref: "Offre",
        },
      ],
    confirme: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: {
      type: String,
      required: false,
    },
    resetPasswordExpiresIn: {
      type: Date,
      required: false,
    },
    // confirmationcode: {
    //   type: String,
    //   required: false,
    // },
    role: {
      type: String,
      enum: ["candidate", "admin", "entreprise"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", userSchema);
