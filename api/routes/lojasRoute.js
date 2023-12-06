const { Router } = require('express');
const LojaController = require('../controllers/LojaController');

const router = Router();

router.get('/lojas', LojaController.getAllLojas);
router.get('/lojas/:id', LojaController.getLojaById);
router.post('/lojas', LojaController.createLoja);
router.put('/lojas/:id', LojaController.updateLoja);
router.delete('/lojas/:id', LojaController.deleteLoja);

module.exports = router