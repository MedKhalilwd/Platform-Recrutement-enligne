const Test = require("../Models/Test");

const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;

createTest = async (req, res) => {
  try {
    // if (req.user.role == "entreprise") {
      const newTest = new Test(req.body);
      await newTest.save();

   
      res.status(201).json({
        message: "hurry! now test are successfuly created",
        data: newTest,
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

getAllTest = async (req, res) => {
  try {
    const listeTest = await Test.find({})
   

    res.status(200).json({
      message: "liste of test",
      data: listeTest,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getTestById = async (req, res) => {
  try {
    const test = await Test.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of test",
      data: test,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getTestByName = async (req, res) => {
  try {
    const test = await Test.find({ nom: req.query.nom });
    res.status(200).json({
      message: "liste of test",
      data: test,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateTest = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      await Test.updateOne({ _id: req.params.id }, req.body);
      res.status(200).json({
        message: "test update",
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
deleteTest = async (req, res) => {
  try {
    if (req.user.role == "entreprise") {
      // const categori = await Categorie.findById( {_id: req.params.id} );
      // await Specialite.findByIdAndUpdate(categori.specialites, {//just nfas5u l sub_categorie m categorie
      //   $pull: { categorie: categori._id} //tjib l variable order mn orders
      //   })
      await Test.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "test delete",
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
  createTest,
  getAllTest,
  getTestById,
  getTestByName,
  updateTest,
  deleteTest,
};
