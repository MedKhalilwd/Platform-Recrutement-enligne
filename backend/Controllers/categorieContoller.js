const Categorie = require("../Models/Categorie");
const Specialite = require("../Models/Specialite");
const User = require("../models/User");

const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;

createCategorie = async (req, res) => {
  try {
    if (req.user.role == "admin") {
      const newCategorie = new Categorie(req.body);
      const createcategori = await newCategorie.save();

      await Specialite.findByIdAndUpdate(req.body.specialites, {
        $push: { categorie: createcategori },
      });
      res.status(201).json({
        message: "hurry! now categorie are successfuly created",
        data: newCategorie,
      });
    } else {
      return res.status(400).json({
        message: "user is not admin",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

getAllCategorie = async (req, res) => {
  try {

    const listeCategorie = await Categorie.find({}).populate('specialites')

    res.status(200).json({
      message: "liste of categorie",
      data: listeCategorie,
    });
 
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getCategorieById = async (req, res) => {
  try {
    const categori = await Categorie.findById({ _id: req.params.id }).populate(
      "specialites"
    );
    res.status(200).json({
      message: "liste of categorie",
      data: categori,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getCategorieByName = async (req, res) => {
  try {
    const categori = await Categorie.find({ nom: req.query.nom }).populate(
      "specialites"
    );
    res.status(200).json({
      message: "liste of categorie",
      data: categori,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getCategorieBySpecialite = async (req, res) => {
  try {
    const categori = await Categorie.find({
      specialites: req.query.specialites,
    }).populate("specialites");
    res.status(200).json({
      message: "liste of categorie",
      data: categori,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
updateCategorie = async (req, res) => {
  try {
    if (req.user.role == "admin") {
      await Categorie.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "categorie update",
      });
    } else {
      return res.status(400).json({
        message: "user is not admin",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteCategorie = async (req, res) => {
  try {
    // if (req.user.role == "admin") {
      const categori = await Categorie.findById({ _id: req.params.id });
      await Specialite.findByIdAndUpdate(categori.specialites, {
        //just nfas5u l sub_categorie m categorie
        $pull: { categorie: categori._id }, //tjib l variable order mn orders
      });
      await Categorie.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "categorie delete",
      });
    // } else {
    //   return res.status(400).json({
    //     message: "user is not admin",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createCategorie,
  getAllCategorie,
  getCategorieById,
  getCategorieByName,
  getCategorieBySpecialite,
  updateCategorie,
  deleteCategorie,
};
