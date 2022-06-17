const Lieu = require("../Models/Lieu");
const Offre = require("../Models/Offre");

createLieu = async (req, res) => {
  try {
    if (req.user.role == 'entreprise'){

    const newLieu = new Lieu(req.body);
    await newLieu.save();

    await Offre.findByIdAndUpdate(req.body.offres, {
      $push: { lieu: newLieu },
    });

    res.status(201).json({
      message: "hurry! now Lieu are successfuly created",
      data: newLieu,
      success: true,
    });
  }else{
    return res.status(400).json({
      message: 'Cette user in not entreprise !!'
    });
  }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

getAllLieu = async (req, res) => {
  try {
    const lieu = await Lieu.find({});

    res.status(200).json({
      message: "liste of lieu",
      data: lieu,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getLieuById = async (req, res) => {
  try {
    const lieu = await Lieu.findById({ _id: req.params.id });
    res.status(200).json({
      message: "listen of lieu",
      data: lieu,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getLieuByName = async (req, res) => {
  try {
    const lieu = await Lieu.find({ nom: req.query.nom });
    res.status(200).json({
      message: "liste of lieu",
      data: lieu,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateLieu = async (req, res) => {
  try {
    if (req.user.role == 'entreprise'){

    await Lieu.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      message: "lieu update",
    });
  }else{
    return res.status(400).json({
      message: 'Cette user in not entreprise !!'
    });
  }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteLieu = async (req, res) => {
  try {
    if (req.user.role == 'entreprise'){

    await Lieu.deleteOne({ _id: req.params.id });
    res.status(200).json({
      message: "lieu delete",
    });
  }else{
    return res.status(400).json({
      message: 'Cette user in not entreprise !!'
    });
  }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createLieu,
  getAllLieu,
  getLieuById,
  getLieuByName,
  updateLieu,
  deleteLieu,
};
