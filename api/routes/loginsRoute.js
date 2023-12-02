const { Router } = require('express');
const LoginController = require('../controllers/LoginController');

const router = Router()

router.get('/logins', LoginController.getAllLogins);
router.get('/logins/:id', LoginController.getLoginById);
router.post('/logins', LoginController.createLogin);
router.put('/logins/:id', LoginController.updateLogin);
router.delete('/logins/:id', LoginController.deleteLogin);

module.exports = router