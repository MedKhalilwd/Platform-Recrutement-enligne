const Skills = require('../Models/Skills')



createSkills = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newSkills = new Skills(req.body);
        await newSkills.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Skills are successfuly created",
          data: newSkills,
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

  getAllSkills = async (req, res) => {
    try {
  
      const listeSkills = await Skills.find({}).populate('levels')
  
      res.status(200).json({
        message: "liste of Skills",
        data: listeSkills,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getSkillsById = async (req, res) => {
    try {
      const skills = await Skills.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of skills",
        data: skills,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  deleteSkills = async (req, res) => {
    try {
      // if (req.user.role == "admin") {
        await Skills.deleteOne({ _id: req.params.id });
        res.status(200).json({
          message: "skills delete",
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
    createSkills,
    getAllSkills,
    getSkillsById,
    deleteSkills
  
  };