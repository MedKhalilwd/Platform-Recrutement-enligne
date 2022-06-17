const route = require('express').Router();
const authController = require("../Controllers/authController");

const multer = require('../Midlware/uploadImage');
 const passport = require('passport');
 require('../Midlware/passpot_auth').passport;







//  route.post('/regAdmin', multer.single('picture'), authController.registerAdmin);

// route.post('/registerCustomer', multer.single('photo'), authController.registerCustomer);


module.exports = route;
