const express = require("express")
const path = require("path")
const expressHbs = require("express-handlebars");
const {engine} = require("express-handlebars");
const sequelize = require("./util/database");
const Game = require("./models/Game");
const Dev = require("./models/Dev");

const app = express();

const ErrorController = require("./controllers/ErrorController")

app.engine("hbs", expressHbs.engine({
    layoutsDir: 'views/layout/',
    defaultLayout: "main-layout",
    extname: 'hbs',
    },
))
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// Rutas
const GameRouter = require('./routes/game')
const DevRouter = require('./routes/dev')


app.use(GameRouter);
app.use(DevRouter);
app.use(ErrorController.Get404);


sequelize.sync().then(result=>{
    app.listen(5050);
  }).catch(err =>{
      console.log(err);
  })