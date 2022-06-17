const Level = require('../Models/Level')



createLevel = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newLevel= new Level(req.body);
        await newLevel.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Level are successfuly created",
          data: newLevel,
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

  getAllLevel = async (req, res) => {
    try {
  
      const listelevel = await Level.find({})
  
      res.status(200).json({
        message: "liste of level",
        data: listelevel,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getLevelById = async (req, res) => {
    try {
      const level = await Level.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of level",
        data: level,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createLevel,
    getAllLevel,
    getLevelById
  
  };