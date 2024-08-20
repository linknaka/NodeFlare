const express = require("express");
const rotas = express.Router();

//Controllers
const CepController = require("./controllers/CepController");

//Routes

//Para utilizar uma pagina nova, coloque o caminho e a função  do controller 
//Exemplo a função index do CepController esta atrelada ao localhost:3333/
//E a função cep esta atrellada ao localhost:3333/cep/numero(exemplo2: localhost:3333/cep/04077900)
//Ao colocar :var você pode passar uma variavel pela URL
rotas.get("/", CepController.index);
rotas.get("/cep/:id", CepController.cep);

module.exports = rotas;