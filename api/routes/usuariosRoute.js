const { Router } = require('express');
const UsuarioController = require('../controllers/UsuarioController');

const router = Router();

router.get('/usuarios', UsuarioController.getAllUsuarios);
router.get('/usuarios/:id', UsuarioController.getUsuarioById);
router.post('/usuarios', UsuarioController.createUsuario);
router.put('/usuarios/:id', UsuarioController.updateUsuario);
router.delete('/usuarios/:id', UsuarioController.deleteUsuario);

module.exports = router