const Competence = require("../Models/Competence");
const Offre = require("../Models/Offre");

createCompetence = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      const newCompetence = new Competence(req.body);
      await newCompetence.save();

      await Offre.findByIdAndUpdate(req.body.offres, {
        $push: { competence: newCompetence },
      });

      res.status(201).json({
        message: "hurry! now competence are successfuly created",
        data: newCompetence,
        success: true,
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

getAllCompetence = async (req, res) => {
  try {
    const competence = await Competence.find({});

    res.status(200).json({
      message: "liste of competence",
      data: competence,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getCompetenceById = async (req, res) => {
  try {
    const competence = await Competence.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of competence",
      data: competence,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getCompetenceByName = async (req, res) => {
  try {
    const competence = await Competence.find({ nom: req.query.nom });
    res.status(200).json({
      message: "liste of competence",
      data: competence,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateCompetence = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Competence.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "competence update",
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
deleteCompetence = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Competence.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "competence delete",
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
  createCompetence,
  getAllCompetence,
  getCompetenceById,
  getCompetenceByName,
  updateCompetence,
  deleteCompetence,
};
