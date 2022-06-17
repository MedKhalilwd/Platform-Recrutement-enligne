const Education = require('../Models/Education')



createEducation = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newEducation = new Education(req.body);
        await newEducation.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Education are successfuly created",
          data: newEducation,
        });
    //   } else {
    //     return res.status(400).json({
    //       message: "user is not entreprise",
    //     });
    //   }
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  getAllEducation = async (req, res) => {
    try {
  
      const listeEducation = await Education.find({})
  
      res.status(200).json({
        message: "liste of Education",
        data: listeEducation,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getEducationById = async (req, res) => {
    try {
      const education = await Education.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of education",
        data: education,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  deleteEducation = async (req, res) => {
    try {
      // if (req.user.role == "admin") {
        await Education.deleteOne({ _id: req.params.id });
        res.status(200).json({
          message: "Education delete",
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
    createEducation,
    getAllEducation,
    getEducationById,
    deleteEducation
  
  };