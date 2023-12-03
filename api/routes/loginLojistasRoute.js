const { Router } = require('express');
const LoginLojistaController = require('../controllers/LoginLojistaController');

const router = Router()

router.get('/logins', LoginLojistaController.getAllLogins);
router.get('/logins/:id', LoginLojistaController.getLoginById);
router.post('/logins', LoginLojistaController.createLogin);
router.put('/logins/:id', LoginLojistaController.updateLogin);
router.delete('/logins/:id', LoginLojistaController.deleteLogin);

module.exports = router