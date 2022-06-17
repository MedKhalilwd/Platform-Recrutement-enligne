const Levelskills = require('../Models/Levelskills')



createLevelskills = async (req, res) => {
    try {
    
        const newSkills = new Levelskills(req.body);
        await newSkills.save();
  
     
        res.status(201).json({
          message: "hurry! now Levelskills are successfuly created",
          data: newSkills,
        });
  
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  getAllLevelskills = async (req, res) => {
    try {
  
      const listeSkills = await Levelskills.find({})
  
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
  getLevelskillsById = async (req, res) => {
    try {
      const skills = await Levelskills.findById({ _id: req.params.id })
      
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
  
module.exports = {
    createLevelskills,
    getAllLevelskills,
    getLevelskillsById
  
  };