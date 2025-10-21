const clientesModel = require('../models/clientesModel');

module.exports = {
    listarClientes: (req, res) => {
        const { login, senha } = req.body;
        const mensagemAcesso = clientesModel.verificarLogin(login, senha);
        res.send('<h1>' + mensagemAcesso + '</h1>');
    }};