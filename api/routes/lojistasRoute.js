const { Router } = require('express');
const LojistaController = require('../controllers/LojistaController');

const router = Router()

router.get('/lojistas', LojistaController.getAllLojistas);

module.exports = router