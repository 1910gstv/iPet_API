const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/lojas', UsuarioController.getAllUsuarios);
router.get('/lojas/:id', UsuarioController.getUsuarioById);
router.post('/lojas', UsuarioController.createUsuario);
router.put('/lojas/:id', UsuarioController.updateUsuario);
router.delete('/lojas/:id', UsuarioController.deleteUsuario);

module.exports = router