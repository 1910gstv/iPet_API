const bodyParser = require('body-parser');

// const pessoas = require('./pessoasRoute');
// const niveis = require('./niveisRoute');
// const turmas = require('./turmasRoute');

const logins = require('./loginsRoute')
const lojas = require('./lojasRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        logins,
        lojas
    );
    
}