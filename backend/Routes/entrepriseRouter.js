const route = require('express').Router();

const contratController = require('../Controllers/contratController')
const lieuController = require('../Controllers/lieuController')
const competenceController = require('../Controllers/competenceController')
const offreController = require('../Controllers/offreController')
const questionController = require('../Controllers/questionController')
const testController = require('../Controllers/testController')
const favoriteController = require('../Controllers/favoriteController')
const authController = require("../Controllers/authController");

const multer = require('../Midlware/uploadImage');
 const passport = require('passport');
 require('../Midlware/passpot_auth').passport;




//pour les contrats
route.post('/createContrat',/* passport.authenticate('jwt', { session: false }), */contratController.createContrat);
route.get('/getAllContrat',contratController.getAllContrat);
route.get('/getContratById/:id',contratController.getContratById);
route.get('/getContratByName', passport.authenticate('jwt', { session: false }),contratController.getContratByName);
route.put('/updateContrat/:id', passport.authenticate('jwt', { session: false }),contratController.updateContrat);
route.put('/deleteContrat/:id',passport.authenticate('jwt', { session: false }), contratController.deleteContrat);

//pour les lieus
route.post('/createLieu', /*passport.authenticate('jwt', { session: false }),*/ lieuController.createLieu);
route.get('/getAllLieu', passport.authenticate('jwt', { session: false }),lieuController.getAllLieu);
route.get('/getLieuById/:id', passport.authenticate('jwt', { session: false }),lieuController.getLieuById);
route.get('/getLieuByName', passport.authenticate('jwt', { session: false }),lieuController.getLieuByName);
route.put('/updateLieu/:id', passport.authenticate('jwt', { session: false }),lieuController.updateLieu);
route.put('/deleteLieu/:id',passport.authenticate('jwt', { session: false }), lieuController.deleteLieu);

//pour les competences
route.post('/createCompetence', passport.authenticate('jwt', { session: false }), competenceController.createCompetence);
route.get('/getAllCompetence', passport.authenticate('jwt', { session: false }),competenceController.getAllCompetence);
route.get('/getCompetenceById/:id', passport.authenticate('jwt', { session: false }),competenceController.getCompetenceById);
route.get('/getCompetenceByName', passport.authenticate('jwt', { session: false }),competenceController.getCompetenceByName);
route.put('/updateCompetence/:id', passport.authenticate('jwt', { session: false }),competenceController.updateCompetence);
route.put('/deleteCompetence/:id',passport.authenticate('jwt', { session: false }), competenceController.deleteCompetence);

//pour les offres
route.post('/createOffre',/* passport.authenticate('jwt', { session: false }), */offreController.createOffre);
route.get('/getAllOffre', /*passport.authenticate('jwt', { session: false }),*/offreController.getAllOffre);
route.get('/getOffreById/:id',/* passport.authenticate('jwt', { session: false }),*/offreController.getOffreById);
route.get('/getOffreByName', passport.authenticate('jwt', { session: false }),offreController.getOffreByName);
route.put('/updateOffre/:id', passport.authenticate('jwt', { session: false }),offreController.updateOffre);
route.delete('/deleteOffre/:id',passport.authenticate('jwt', { session: false }), offreController.deleteOffre);


//pour les questions
route.post('/createQestion',/* passport.authenticate('jwt', { session: false }),*/ questionController.createQestion);
route.get('/getAllQuestion', /*passport.authenticate('jwt', { session: false }),*/questionController.getAllQuestion);
route.get('/getQuestionById/:id',/* passport.authenticate('jwt', { session: false }),*/questionController.getQuestionById);
route.get('/getQuestionByName', passport.authenticate('jwt', { session: false }),questionController.getQuestionByName);
route.put('/updateQuestion/:id', passport.authenticate('jwt', { session: false }),questionController.updateQuestion);
route.put('/deleteQuestion/:id',passport.authenticate('jwt', { session: false }), questionController.deleteQuestion);


//pour les test
route.post('/createTest',/* passport.authenticate('jwt', { session: false }),*/ testController.createTest);
route.get('/getAllTest',/* passport.authenticate('jwt', { session: false }),*/testController.getAllTest);
route.get('/getTestById/:id', passport.authenticate('jwt', { session: false }),testController.getTestById);
route.get('/getTestByName', passport.authenticate('jwt', { session: false }),testController.getTestByName);
route.put('/updateTest/:id', passport.authenticate('jwt', { session: false }),testController.updateTest);
route.delete('/deleteTest/:id',passport.authenticate('jwt', { session: false }), testController.deleteTest);

//pour les candidature

route.post('/createFavorite/:id', favoriteController.createFavorite);
route.get('/getAllfavorite', favoriteController.getAllfavorite);
route.delete('/deleteFavorite/:id', favoriteController.deleteFavorite);

route.post('/registerCompany', multer.single('image'), authController.registerCompany)

route.put('/updateprofileCompany/:id', /*passport.authenticate('jwt', { session: false }),*/authController.updateprofileCompany);
route.get('/confirmeOffre/:id',offreController.confirmeOffre);

module.exports = route;
