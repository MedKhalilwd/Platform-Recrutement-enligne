const TypesOffer = require("../Models/typesoffer");




createTypesOffer = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newTypesoffer = new TypesOffer(req.body);
        await newTypesoffer.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now types offer are successfuly created",
          data: newTypesoffer,
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

  getAllTypesOffer = async (req, res) => {
    try {
  
      const listeTypesOffer = await TypesOffer.find({})
  
      res.status(200).json({
        message: "liste of Types offer",
        data: listeTypesOffer,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getTypesOfferById = async (req, res) => {
    try {
      const typesoffer = await TypesOffer.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of types offer",
        data: typesoffer,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createTypesOffer,
    getAllTypesOffer,
    getTypesOfferById
  
  };