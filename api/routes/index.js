const bodyParser = require('body-parser');

// const pessoas = require('./pessoasRoute');
// const niveis = require('./niveisRoute');
// const turmas = require('./turmasRoute');

const logins = require('./loginsRoute')
const loginLojistas = require('./loginLojistasRoute')
const lojas = require('./lojasRoute')
const lojistas = require('./lojistasRoute')
const pedidos = require('./pedidosRoute')
const usuarios = require('./usuariosRoute')
const pets = require('./petsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        logins,
        lojas,
        lojistas,
        loginLojistas,
        pedidos,
        pets,
        usuarios
    );
    
}