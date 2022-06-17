const express = require("express");
const { success, error } = require("consola");
require("dotenv").config();
// const bcrypt = require("bcrypt");
const DB = require('./config/database')
const adminRouter = require("./Routes/adminRouter");
const authRouter = require("./Routes/authRouter");
const chatRouter = require("./Routes/chatRouter");
const entrepriseRouter = require("./Routes/entrepriseRouter");
const cors = require("cors");
const passport = require("passport");

const PORT = process.env.APP_PORT;
const DOMAIN = process.env.APP_DOMAIN;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/", adminRouter);
app.use("/", authRouter);
app.use("/", chatRouter);
app.use("/", entrepriseRouter);
app.use(passport.initialize());


app.get('/getfile/:image', function(req,res){
  res.sendFile(__dirname+'/Storage/'+req.params.image)
})

app.post('/multiplefiles',(req,res) => {
multipleUpload(req, res,(err) => {
  if (err) {
    console.log(err);
  }
  console.log(req.files);

  let img = [];

  req.files.forEach(file => {
    img.push(file.filename)
  });

  res.json({
    path:img
  })
})
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(PORT, async () => {
  try {
    success({
      message: `Server started on PORT ${PORT} ` + `URL : ${DOMAIN}`,
      badge: true,
    });
  } catch (err) {
    error({ message: "error with server", badge: true });
  }
});
