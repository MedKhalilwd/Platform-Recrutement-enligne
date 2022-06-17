const Customer = require("../models/User");
const bcrypt = require("bcryptjs");
const { randomBytes } = require("crypto");
const { join } = require("path");
const jwt = require("jsonwebtoken");
const DOMAIN = process.env.APP_DOMAIN;
const SECRET = process.env.APP_SECRET;
const randtoken = require("rand-token");
var RefreshTokens = [];
const nodemailer = require("nodemailer");
const User = require("../models/User");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "medk4932@gmail.com",
    pass: "khalilofatiga50",
  },
});
registerAdmin = async (req, res) => {
  try {
    req.body["picture"] = req.file.filename
    const password = bcrypt.hashSync(req.body.password, 8);
    const newAdmin = new User({
      ...req.body,
      password,
      role: "admin",
      
    });
    await newAdmin.save();

    res.status(200).json({
      message: "hurry! now account are successfuly created",
      data: newAdmin,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
registerCompany = async (req, res) => {
  try {
    req.body["image"] = req.file.filename
    const password = bcrypt.hashSync(req.body.password, 8);
    const newCompany = new User({
      ...req.body,
      password,
      role: "entreprise",
      
    });
    await newCompany.save();

    res.status(200).json({
      message: "hurry! now account company are successfuly created",
      data: newCompany,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
verifyEmail = async (req, res) => {
  try {
    const { verificationcode } = req.params;
    const user = await User.findOne({
      verificationcode,
    });
    user.verified = true;
    user.verificationcode = undefined;
    await user.save();
    return res.sendFile(
      join(__dirname, "../Tamplates/verification_success.html")
    );
  } catch (error) {
    res.sendFile(join(__dirname, "../Tamplates/error.html"));
  }
};
Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, massage: "Email not found !" });
    }
    // if (user.verified === true) {
      const passwordCompare = bcrypt.compareSync(password, user.password);
      if (!passwordCompare) {
        return res.status(404).json({
          status: 404,
          massage: "password Incorrect !",
        });
      }
      const token = jwt.sign(
        {
          id: user._id,
          user: user,
        },
        SECRET,
        {
          expiresIn: "7 days",
        }
      );
      var refreshToken = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: 86400, //24hour
      });
      RefreshTokens[refreshToken] = user._id;

      const result = {
        email: user.email,
        user: user,
        token: token,
        expiresIn: 1,
        refreshtoken: refreshToken,
      };
      return res.status(200).json({
        ...result, //pour afficher les donner
        message: "Hurray! You are now logged in.",
        success: true,
      });
    // } else {
    //   return res.status(200).json({
    //     message: "you are not verified",
    //     success: false,
    //   });
    // }
  } catch (error) {
    res.status(404).json({ status: 404, massage: error.message });
  }
};
Loginadmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: 404, massage: "Email not found !" });
    }
    // if (user.verified === true) {
      const passwordCompare = bcrypt.compareSync(password, user.password);
      if (!passwordCompare) {
        return res.status(404).json({
          status: 404,
          massage: "password Incorrect !",
        });
      }
      const token = jwt.sign(
        {
          id: user._id,
          user: user,
        },
        SECRET,
        {
          expiresIn: "7 days",
        }
      );
      var refreshToken = jwt.sign({ id: user._id }, SECRET, {
        expiresIn: 86400, //24hour
      });
      RefreshTokens[refreshToken] = user._id;

      const result = {
        email: user.email,
        user: user,
        token: token,
        expiresIn: 1,
        refreshtoken: refreshToken,
      };
      return res.status(200).json({
        ...result, //pour afficher les donner
        message: "Hurray! You are now logged in.",
        success: true,
      });
    // } else {
    //   return res.status(200).json({
    //     message: "you are not verified",
    //     success: false,
    //   });
    // }
  } catch (error) {
    res.status(404).json({ status: 404, massage: error.message });
  }
};
refreshToken = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken;
    console.log(req.user._id);
    console.log(RefreshTokens);
    console.log(RefreshTokens[refreshToken]);
    console.log("refresh", refreshToken in RefreshTokens);
    if (
      refreshToken in
      RefreshTokens /*&& RefreshTokens[refreshToken] == req.user._id*/
    ) {
      const token = jwt.sign(
        {
          user: req.user,
        },
        SECRET,
        {
          expiresIn: "15s",
        }
      );
      res.status(200).json({
        accesstoken: token,
      });
    } else {
      res.status(200).json({
        message: "token is not defind",
      });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
profile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
updateprofile = async (req, res) => {
  try {
    await User.updateOne({ _id: req.user._id }, req.body);
    res.status(200).json({
      message: "Profile update",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

getAllUser = async (req, res) => {
  try {

    const listeUser = await User.find({});

    res.status(200).json({
      message: "liste of Users",
      data: listeUser,
    });
 
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
getUserById = async (req, res) => {
  try {
    const users = await User.findById({ _id: req.params.id });
    res.status(200).json({
      message: "liste of users",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

deleteAdmin = async (req, res) => {
  try {
    // if (req.user.role == "admin") {
      const users = await User.findById({ _id: req.params.id });
      // await Specialite.findByIdAndUpdate(categori.specialites, {
      //   $pull: { categorie: categori._id }, 
      // });
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "user delete",
      });
    // } else {
    //   return res.status(400).json({
    //     message: "user is not admin",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
deleteUser = async (req, res) => {
  try {
    // if (req.user.role == "admin") {
      const users = await User.findById({ _id: req.params.id });
     
      await User.deleteOne({ _id: req.params.id });
      res.status(200).json({
        message: "user delete",
      });
    // } else {
    //   return res.status(400).json({
    //     message: "user is not admin",
    //   });
    // }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

updateprofileCompany = async (req, res) => {
  try {
        // if (req.user.role == "entreprise") {

    await User.updateOne({ _id: req.params.id }, req.body);
    res.status(200).json({
      message: "Profile update",
    });
    //  } else {
    //   return res.status(400).json({
    //     message: "user is not entreprise",
    //   });
    // }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

confirmecompte = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });

    user.confirme = true;
    await user.save();

    transporter.sendMail(
      {
        to: user.email,
        subject: "welcome " + user.nom,
        text: "welcome mr",
        html: `<!DOCTYPE html>
                      <html lang="en">
                      <head>
                          <meta charset="UTF-8">
                          <meta http-equiv="X-UA-Compatible" content="IE=edge">
                          <meta name="viewport" content="width=device-width, initial-scale=1.0">
                          <title>Document</title>
                      </head>
                      <body>
                          <h2>Hello  ${user.nom}!</h2>
                          <p>We're glad to have you on board at ${user.email}</p>
                      </body>
                      </html>`,
      },
      (err, info) => {
        if (err) {
          console.log("error : ", err.message);
        } else {
          console.log("Email sent : ", info.response);
        }
      }
    );
    return res.status(200).json({
      message: "Your account is now verified",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }

};

module.exports = {
  // registerCustomer,
  verifyEmail,
  Login,
  profile,
  updateprofile,
  refreshToken,
  getAllUser,
  getUserById,
  deleteAdmin,
  deleteUser,
  updateprofileCompany,
  registerAdmin,
  Loginadmin,
  registerCompany,
  confirmecompte,
};
