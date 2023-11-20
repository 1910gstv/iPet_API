const bodyParser = require('body-parser');

// const pessoas = require('./pessoasRoute');
// const niveis = require('./niveisRoute');
// const turmas = require('./turmasRoute');

const { Router } = require('express');

const router = Router()
router.get('/', (req,res) => {
    res.send('Oi');
})

module.exports = app => {
    app.use(
        bodyParser.json(),
        bodyParser.urlencoded({ extended: false }),
        router
    );
    
}