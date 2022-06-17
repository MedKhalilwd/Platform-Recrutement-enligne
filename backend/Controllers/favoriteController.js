const Favorite = require("../Models/Favorite");
const Offre = require("../Models/Offre");





createFavorite = async (req, res) => {
    try {
   
     const offre = req.params.id;

            const newFavorite = new Favorite({ offres: offre })
          
          await newFavorite.save();

            res.status(201).json({
                message: "hurry! now Favorite are successfuly created",
                data: newFavorite,
                success: true,
            });
       
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

getAllfavorite = async (req, res) => {
    try {
      const favorite = await Favorite.find({})
      .populate("offres")
  
      res.status(200).json({
        message: "liste of favorite",
        data: favorite,
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

  deleteFavorite = async (req, res) => {
    try {
        await Favorite.deleteOne({ _id: req.params.id });

        res.status(200).json({
          message: "favorite delete",
        });
     
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };

module.exports = {
    createFavorite,
    getAllfavorite,
    deleteFavorite
  };
  