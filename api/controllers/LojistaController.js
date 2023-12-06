const database = require('../models');

class LojistaController {

    static async getAllLojistas(req,res){
        try {
            const allLojistas = await database.Lojistas.findAll({
                attributes: [
                    'id', 'nome', 'cpf', 'lojas_id', 'logins_lojistas_id'
                ]
            });
            return res.status(200).json(allLojistas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLojistaById(req, res) {
        const { id } = req.params;

        try {
            const lojista = await database.Lojistas.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'cpf', 'lojas_id', 'logins_lojistas_id'
                ]
            });
            return res.status(200).json(lojista)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createLojista(req, res) {
        const newLojista = req.body;

        try {
            const newLojistaCreated = await database.Lojistas.create(newLojista)
            return res.status(200).json(newLojistaCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateLojista(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Lojistas.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedLojista = await database.Lojistas.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'cpf', 'lojas_id', 'logins_lojistas_id'
                ]
            })
            return res.status(200).json(updatedLojista)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteLojista(req, res) {
        const { id } = req.params;

        try {
            await database.Lojistas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({mensagem: `id ${id} deletado!` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LojistaController