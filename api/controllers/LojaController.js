const database = require('../models');

class LojaController {

    static async getAllLojas (req, res) {
        try {
            const allLojas = await database.Lojas.findAll({
                attributes: [
                    'id', 'nome', 'cnpj', 'endereco', 'telefone'
                ]
            });
            return res.status(200).json(allLojas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLojaById(req,res) {
        const { id } = req.params;

        try {
            const loja = await database.Lojas.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'cnpj', 'endereco', 'telefone'
                ]
            });
            return res.status(200).json(loja);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async createLoja(req,res){
        const newLoja = req.body;

        try {
            const newLojaCreated = await database.Lojas.create(newLoja);
            return res.status(200).json(newLojaCreated)
            
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLoja(req,res){
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Lojas.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedLoja = await database.Lojas.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'cnpj', 'endereco', 'telefone'
                ]
            });
            return res.status(200).json(updatedLoja);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLoja(req,res){
        const { id } = req.params;

        try {
            await database.Lojas.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado!`})
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LojaController