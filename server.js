//Esse arquivo começa chamando os outros e colocando em localhost:3333
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


const logs = function (req, res, next) {
 
  next();
};

app.use(logs);

app.use(cors());

app.use(routes);
app.listen(3333);