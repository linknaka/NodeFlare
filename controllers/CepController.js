const axios = require("axios");

module.exports = {
  async cep(req, res) {   //Função cep
    const cep = req.params.id;
    let endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);  //O uso do axeios é o que permite o contato com a API

    return res.json(endereco.data);
  },
  async index(req, res) {  //Função index
    let endereco = await axios.get(
      `https://viacep.com.br/ws/SP/São%20Paulo/Avenida/json/`
    );
    //Usando o render, ele carrega a pagina index que esta na pasta views e passa ceps como vetor 
    res.render("index", { 
      ceps: endereco.data,
    });
  },
};