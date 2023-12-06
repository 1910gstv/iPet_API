const database = require('../models');

class UsuarioController {
    static async getAllUsuarios(req,res){
        try {
            const allUsuarios = await database.Usuarios.findAll({
                attributes: [
                    'usuario_id', 'nome', 'cpf', 'logins_id'
                ]
            });
            return res.status(200).json(allUsuarios)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getUsuarioById(req,res) {
        const { id } = req.params;

        try {
            const usuario = await database.Usuarios.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'usuario_id', 'nome', 'cpf', 'logins_id'
                ]
            });
            return res.status(200).json(usuario)
        } catch (error) {
            'id', 'nome', 'cpf', 'lojas_id', 'logins_lojistas_id'
        }
    }

    static async createUsuario(req, res) {
        const newUsuario = req.body;

        try {
            const newUsuarioCreated = await database.Usuarios.create(newUsuario);
            return res.status(200).json(newUsuarioCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updateUsuario(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Usuarios.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedUsuario = await database.Usuarios.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'usuario_id', 'nome', 'cpf', 'logins_id'
                ]
            });
            return res.status(200).json(updatedUsuario)
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async deleteUsuario(req, res) {
        const { id } = req.params;

        try {
            await database.Usuarios.destroy({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json({mensagem: `id ${id} deletado!` })
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = UsuarioController