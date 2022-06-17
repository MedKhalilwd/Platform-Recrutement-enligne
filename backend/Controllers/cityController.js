const City = require('../Models/City')



createCity = async (req, res) => {
    try {
    //   if (req.user.role == "entreprise") {
        const newCity = new City(req.body);
        await newCity.save();
  
        //   await Specialite.findByIdAndUpdate(req.body.specialites, {
        //     $push: { categorie: categori },
        //   });
        res.status(201).json({
          message: "hurry! now city are successfuly created",
          data: newCity,
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

  getAllCity = async (req, res) => {
    try {
  
      const listecity = await City.find({})
  
      res.status(200).json({
        message: "liste of city",
        data: listecity,
      });
   
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  getCityById = async (req, res) => {
    try {
      const city = await City.findById({ _id: req.params.id })
      
      res.status(200).json({
        message: "liste of city",
        data: city,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createCity,
    getAllCity,
    getCityById
  
  };