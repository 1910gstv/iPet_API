const bodyParser = require('body-parser');

// const pessoas = require('./pessoasRoute');
// const niveis = require('./niveisRoute');
// const turmas = require('./turmasRoute');

const logins = require('./loginsRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        logins
    );
    
}