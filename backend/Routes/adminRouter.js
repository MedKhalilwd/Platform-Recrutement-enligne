const route = require('express').Router();
const specialiteController = require('../Controllers/specialiteController')
const categorieContoller = require('../Controllers/categorieContoller')
const authController = require("../Controllers/authController");
const typesOfferController = require("../Controllers/typesOfferController");
const cityController = require("../Controllers/cityController");
const genderController = require("../Controllers/genderController");
const levelController = require("../Controllers/levelController");
const educationController = require("../Controllers/educationController");
const skillsController = require("../Controllers/skillsController");
const skillslevelController = require("../Controllers/skillslevelController");
const experienceController = require("../Controllers/experienceController");
const filacvController = require("../Controllers/filacvController");


const multer = require('../Midlware/uploadImage');
const passport = require('passport')
require('../Midlware/passpot_auth').passport;

 route.post('/registerAdmin', multer.single('image'), authController.registerAdmin);
 route.post('/Loginadmin', authController.Loginadmin);
 route.post('/Login', authController.Login);
 route.get('/confirmecompte/:id',authController.confirmecompte)


//pour la specialite
// route.post('/createSpecialites', passport.authenticate('jwt', { session: false }), specialiteController.createSpecialites);
route.post('/createSpecialites', passport.authenticate('jwt', { session: false }),  specialiteController.createSpecialites);
route.get('/getAllSpecialite',specialiteController.getAllSpecialite);
route.get('/getSpecialiteById/:id', passport.authenticate('jwt', { session: false }),specialiteController.getSpecialiteById);
route.get('/getSpecialiteByName', passport.authenticate('jwt', { session: false }),specialiteController.getSpecialiteByName);
route.put('/updateSpecialite/:id', /*passport.authenticate('jwt', { session: false }),*/ specialiteController.updateSpecialite);
route.delete('/deleteSpecialite/:id',passport.authenticate('jwt', { session: false }), specialiteController.deleteSpecialite);

//pour categorie
route.post('/createCategorie',  passport.authenticate('jwt', { session: false }),categorieContoller.createCategorie);
route.get('/getAllCategorie', categorieContoller.getAllCategorie);
route.get('/getCategorieById/:id', passport.authenticate('jwt', { session: false }),categorieContoller.getCategorieById);
route.get('/getCategorieByName', passport.authenticate('jwt', { session: false }),categorieContoller.getCategorieByName);
route.get('/getCategorieBySpecialite', passport.authenticate('jwt', { session: false }),categorieContoller.getCategorieBySpecialite);
route.put('/updateCategorie/:id', passport.authenticate('jwt', { session: false }),categorieContoller.updateCategorie);
route.delete('/deleteCategorie/:id', /*passport.authenticate('jwt', { session: false }), */categorieContoller.deleteCategorie);

route.get('/getAllUser', authController.getAllUser);
route.get('/getUserById/:id',authController.getUserById);

route.delete('/deleteAdmin/:id',/*passport.authenticate('jwt', { session: false }),*/ authController.deleteAdmin)
route.delete('/deleteUser/:id',authController.deleteUser)

route.post('/createTypesOffer', typesOfferController.createTypesOffer)
route.get('/getAllTypesOffer', typesOfferController.getAllTypesOffer)
route.get('/getTypesOfferById/:id', typesOfferController.getTypesOfferById)

route.post('/createCity', cityController.createCity)
route.get('/getAllCity', cityController.getAllCity)
route.get('/getCityById/:id', cityController.getCityById)

route.post('/createGender', genderController.createGender)
route.get('/getAllGender', genderController.getAllGender)
route.get('/getGenderById/:id', genderController.getGenderById)

route.post('/createLevel', levelController.createLevel)
route.get('/getAllLevel', levelController.getAllLevel)
route.get('/getLevelById/:id', levelController.getLevelById)

route.post('/createEducation', educationController.createEducation)
route.get('/getAllEducation', educationController.getAllEducation)
route.get('/getEducationById/:id', educationController.getEducationById)
route.delete('/deleteEducation/:id',educationController.deleteEducation);

route.post('/createSkills', skillsController.createSkills)
route.get('/getAllSkills', skillsController.getAllSkills)
route.get('/getSkillsById/:id', skillsController.getSkillsById)
route.delete('/deleteSkills/:id',skillsController.deleteSkills);



route.post('/createLevelskills', skillslevelController.createLevelskills)
route.get('/getAllLevelskills', skillslevelController.getAllLevelskills)
route.get('/getLevelskillsById/:id', skillslevelController.getLevelskillsById)


route.post('/createCvfil',multer.single('filecv'), filacvController.createCvfil)
route.get('/getAllCvfil', filacvController.getAllCvfil)
route.delete('/deleteCvfil/:id', filacvController.deleteCvfil)

route.post('/createExperience', experienceController.createExperience)
route.get('/getAllExperience', experienceController.getAllExperience)
route.get('/getExperienceById/:id', experienceController.getExperienceById)
route.delete('/deleteExperience/:id',experienceController.deleteExperience);


//les route de forget password
// route.post('/forgetPassword/:email', authController.forgetPassword)
// route.post('/rest/:resetPasswordToken', authController.resetpassword)



module.exports = route;
