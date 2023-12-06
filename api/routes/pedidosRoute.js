const  { Router } = require('express');
const PedidoController = require('../controllers/PedidoController')

const router = Router();

router.get('/pedidos', PedidoController.getAllPedidos);
router.get('/pedidos/:id', PedidoController.getPedidoById);
router.post('/pedidos', PedidoController.createPedido);
router.put('/pedidos/:id', PedidoController.updatePedido);
router.delete('/pedidos/:id', PedidoController.deletePedido);

module.exports = router