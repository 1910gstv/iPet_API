const { Router } = require('express');
const LojistaController = require('../controllers/LojistaController');

const router = Router()

router.get('/lojistas', LojistaController.getAllLojistas);
router.get('/lojistas/:id', LojistaController.getLojistaById);
router.post('/lojistas', LojistaController.createLojista);
router.put('/lojistas/:id', LojistaController.updateLojista);
router.delete('/lojistas/:id', LojistaController.deleteLojista);

module.exports = router