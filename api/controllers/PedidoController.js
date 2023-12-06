const database = require('../models');

class PedidoController {

    static async getAllPedidos(req,res) {
        try {
            const allPedidos = await database.Pedidos.findAll({
                attributes: [
                    'id', 'descricao', 'loja_id', 'usuario_id', 'pet_id'
                ]
            });
            return res.status(200).json(allPedidos);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPedidoById(req, res) {
        const { id } = req.params;

        try {
            const pedido = await database.Pedidos.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pedido)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createPedido(req, res){
        const newPedido = req.body;

        try {
            const newPedidoCreated = await database.Pedidos.create(newPedido)
            return res.status(200).json(newPedidoCreated)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updatePedido(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Pedidos.update( newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedPedido = await database.Pedidos.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'descricao', 'loja_id', 'usuario_id', 'pet_id'                
                ]
            });
            return res.status(200).json(updatedPedido);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletePedido(req, res) {
        const { id } = req.params;

        try {
            await database.Pedidos.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({mensagem: `id ${id} deletado!` });
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = PedidoController;