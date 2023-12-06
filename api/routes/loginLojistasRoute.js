const { Router } = require('express');
const LoginLojistaController = require('../controllers/LoginLojistaController');

const router = Router()

router.get('/loginLojistas', LoginLojistaController.getAllLogins);
router.get('/loginLojistas/:id', LoginLojistaController.getLoginById);
router.post('/loginLojistas', LoginLojistaController.createLogin);
router.put('/loginLojistas/:id', LoginLojistaController.updateLogin);
router.delete('/loginLojistas/:id', LoginLojistaController.deleteLogin);

module.exports = router