const Offre = require("../Models/Offre");
const User = require("../models/User");
const nodemailer = require("nodemailer");
const typesoffer = require("../Models/typesoffer");


var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohamedromdhani499@gmail.com",
      pass:  process.env.APP_PASS,
    },
  });


createOffre = async (req, res) => {
    try {
        // if (req.user.role == "entreprise") {
           
            const newOffre = new Offre(
                req.body,
         
            );
            await newOffre.save();

            await User.findByIdAndUpdate(req.body.entrepris, {
                $push: { offres: newOffre },
            });
            // await typesoffer.findByIdAndUpdate(req.body.typesoffers, {
            //     $push: { offres: newOffre },
            // });

            res.status(201).json({
                message: "hurry! now Offre are successfuly created",
                data: newOffre,
                success: true,
            });
        // } else {
        //     return res.status(400).json({
        //         message: "Cette user in not entreprise !!",
        //     });
        // }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
confirmeOffre = async (req, res) => {
    try {
      const offre = await Offre.findById({ _id: req.params.id });
  
      offre.confirmeoffre = true;
      await offre.save();
    //   const user = await User.findById({ _id: req.params.id });

     
      return res.status(200).json({
        message1: "Your offer is now verified",
      });
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  };
getAllOffre = async (req, res) => {
    try {
        const offre = await Offre.find({})
            .populate("entrepris")
            .populate("city")
            .populate("competence")
            .populate("contrat")
            .populate("specialites")
            .populate("gender")
            .populate("level")
            .populate("typesoffers");

        res.status(200).json({
            message: "liste of offre",
            data: offre,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
getOffreById = async (req, res) => {
    try {
        const offre = await Offre.findById({ _id: req.params.id })
        .populate("entrepris")
        .populate("city")
        .populate("competence")
        .populate("contrat")
        .populate("specialites")
        .populate("gender")
        .populate("level")
        .populate("typesoffers");


        res.status(200).json({
            message: "liste of offre",
            data: offre,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
getOffreByName = async (req, res) => {
    try {
        const offre = await Offre.find({ description: req.query.description })
            .populate("entrepris")
            .populate("city")
            .populate("competence")
            .populate("gender")
            .populate("level")
            .populate("contrat");

        res.status(200).json({
            message: "liste of offre",
            data: offre,
        });
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

updateOffre = async (req, res) => {
    try {
        if (req.user.role == "entreprise") {
            await Offre.updateOne({ _id: req.params.id }, req.body);
            res.status(200).json({
                message: "Offre update",
            });
        } else {
            return res.status(400).json({
                message: "Cette user in not entreprise !!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
deleteOffre = async (req, res) => {
    try {
        if (req.user.role == "entreprise") {
            await Offre.deleteOne({ _id: req.params.id });
            res.status(200).json({
                message: "Offre delete",
            });
        } else {
            return res.status(400).json({
                message: "Cette user in not entreprise !!",
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};

module.exports = {
    createOffre,
    getAllOffre,
    getOffreById,
    getOffreByName,
    updateOffre,
    deleteOffre,
    confirmeOffre
};
