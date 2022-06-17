const Specialite = require("../Models/Specialite");
const Categorie = require("../Models/Categorie");
const User = require("../models/User");

createSpecialites = async (req, res) => {
  try {
    if (req.user.role == "admin") {
      const newSpecialite = new Specialite(req.body);

      await newSpecialite.save();
     

      res.status(201).json({
        message: "hurry! now sprcialite are successfuly created",
        data: newSpecialite,
        success: true,
      });
    } else {
      return res.status(400).json({
        message: "Cette user in not admin !!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

getAllSpecialite = async (req, res) => {
  try {

    const specialite = await Specialite.find({}).populate('categorie');

    res.status(200).json({
      message: "liste of specialite",
      data: specialite,
    });
  
  
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getSpecialiteById = async (req, res) => {
  try {
    const specialite = await Specialite.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of specialite",
      data: specialite,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getSpecialiteByName = async (req, res) => {
  try {
    const specialite = await Specialite.find({
      description: req.query.description,
    });
    res.status(200).json({
      message: "liste of specialite",
      data: specialite,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateSpecialite = async (req, res) => {
  try {
    // if (req.user.role == "admin") {
      await Specialite.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "specialite update",
      });
    // } else {
    //   return res.status(400).json({
    //     message: "Cette user in not admin !!",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteSpecialite = async (req, res) => {
  try {
    // if (req.user.role == "admin") {
      await Specialite.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "specialite delete",
      });
    // } else {
    //   return res.status(400).json({
    //     message: "Cette user in not admin !!",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createSpecialites,
  getAllSpecialite,
  getSpecialiteById,
  getSpecialiteByName,
  updateSpecialite,
  deleteSpecialite,
};
