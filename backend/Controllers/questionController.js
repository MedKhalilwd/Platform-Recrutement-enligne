const Question = require("../Models/Question");
const Test = require("../Models/Test");

const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;

createQestion = async (req, res) => {
  try {
    // if (req.user.role == "entreprise") {
      const newQuestion = new Question(req.body);
      await newQuestion.save();

      await Test.findByIdAndUpdate(req.body.tests, {
        $push: { questions: newQuestion },
      });
      res.status(201).json({
        message: "hurry! now question are successfuly created",
        data: newQuestion,
      });
    // } else {
    //   return res.status(400).json({
    //     message: "user is not entreprise",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

getAllQuestion = async (req, res) => {
  try {
    const listeQuestion = await Question.find({});

    res.status(200).json({
      message: "liste of question",
      data: listeQuestion,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getQuestionById = async (req, res) => {
  try {
    const question = await Question.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of question",
      data: question,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getQuestionByName = async (req, res) => {
  try {
    const question = await Question.find({ nom: req.query.nom });
    res.status(200).json({
      message: "liste of question",
      data: question,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateQuestion = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Question.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "question update",
      });
    } else {
      return res.status(400).json({
        message: "user is not entreprise",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteQuestion = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      // const categori = await Categorie.findById( {_id: req.params.id} );
      // await Specialite.findByIdAndUpdate(categori.specialites, {//just nfas5u l sub_categorie m categorie
      //   $pull: { categorie: categori._id} //tjib l variable order mn orders
      //   })
      await Question.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "question delete",
      });
    } else {
      return res.status(400).json({
        message: "user is not entreprise",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  createQestion,
  getAllQuestion,
  getQuestionById,
  getQuestionByName,
  updateQuestion,
  deleteQuestion,
};
