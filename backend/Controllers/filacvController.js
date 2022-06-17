const Cvfil = require('../Models/Cvfil')



createCvfil = async (req, res) => {
    try {
        req.body["filecv"] = req.file.filename;

    //   if (req.user.role == "entreprise") {
        const newCvfil = new Cvfil(req.body);
        await newCvfil.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now Cvfil are successfuly created",
          data: newCvfil,
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

  getAllCvfil = async (req, res) => {
    try {
  
      const listeCvfil = await Cvfil.find({})
  
      res.status(200).json({
        message: "Cvfil of Skills",
        data: listeCvfil,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
 
  deleteCvfil= async (req, res) => {
    try {
      // if (req.user.role == "admin") {
        await Cvfil.deleteOne({ _id: req.params.id });
        res.status(200).json({
          message: "Cvfil delete",
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
    createCvfil,
    getAllCvfil,
    deleteCvfil,
  
  };