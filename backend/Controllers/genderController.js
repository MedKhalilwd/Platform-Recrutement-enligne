const Gender = require('../Models/Gender')



createGender = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newGender = new Gender(req.body);
        await newGender.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Gender are successfuly created",
          data: newGender,
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

  getAllGender = async (req, res) => {
    try {
  
      const listegender = await Gender.find({})
  
      res.status(200).json({
        message: "liste of gender",
        data: listegender,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getGenderById = async (req, res) => {
    try {
      const gender = await Gender.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of gender",
        data: gender,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createGender,
    getAllGender,
    getGenderById
  
  };