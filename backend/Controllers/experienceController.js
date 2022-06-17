const Experience = require('../Models/Experience')



createExperience = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newExperience = new Experience(req.body);
        await newExperience.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Experience are successfuly created",
          data: newExperience,
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

  getAllExperience = async (req, res) => {
    try {
  
      const listeExperience = await Experience.find({})
  
      res.status(200).json({
        message: "liste of Experience",
        data: listeExperience,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getExperienceById = async (req, res) => {
    try {
      const experience = await Experience.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of experience",
        data: experience,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  deleteExperience = async (req, res) => {
    try {
      // if (req.user.role == "admin") {
        await Experience.deleteOne({ _id: req.params.id });
        res.status(200).json({
          message: "Experience delete",
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
    createExperience,
    getAllExperience,
    getExperienceById,
    deleteExperience
  
  };