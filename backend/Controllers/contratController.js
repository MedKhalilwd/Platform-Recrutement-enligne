const Contrat = require("../Models/Contrat");
const Offre = require("../Models/Offre");

createContrat = async (req, res) => {
  try {
    // if (req.user.role == "entreprise") {
      const newContrat = new Contrat(req.body);
      await newContrat.save();

      // await Offre.findByIdAndUpdate(req.body.offres, {
      //   $push: { contrat: newContrat },
      // });

      res.status(201).json({
        message: "hurry! now contrat are successfuly created",
        data: newContrat,
        success: true,
      });
    // } else {
    //   return res.status(400).json({
    //     message: "Cette user in not entreprise !!",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

getAllContrat = async (req, res) => {
  try {
    const contrat = await Contrat.find({});

    res.status(200).json({
      message: "liste of contrat",
      data: contrat,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getContratById = async (req, res) => {
  try {
    const contrat = await Contrat.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of contrat",
      data: contrat,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getContratByName = async (req, res) => {
  try {
    const contrat = await Contrat.find({ type: req.query.type });
    res.status(200).json({
      message: "liste of contrat",
      data: contrat,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateContrat = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Contrat.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "contrat update",
      });
    } else {
      return res.status(400).json({
        message: "Cette user in not entreprise !!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteContrat = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Contrat.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "contrat delete",
      });
    } else {
      return res.status(400).json({
        message: "Cette user in not entreprise !!",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createContrat,
  getAllContrat,
  getContratById,
  getContratByName,
  updateContrat,
  deleteContrat,
};
