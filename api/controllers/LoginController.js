const database = require('../models');

class LoginController {
    static async getAllLogins(req, res) {
        try {
            const allLogins = await database.Logins.findAll({
                attributes: [
                    'id', 'email', 'senha'
                ]
            });
            return res.status(200).json(allLogins);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getLoginById(req, res) {
        const { id } = req.params

        try {
            const login = await database.Logins.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'email', 'senha'
                ]
            });
            return res.status(200).json(login)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createLogin(req, res) {
        const newLogin = req.body;

        try {
            const newLoginCreated = await database.Logins.create(newLogin)
            return res.status(200).json(newLoginCreated)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async updateLogin(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Logins.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedLogin = await database.Logins.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'email', 'senha'
                ]
            });
            return res.status(200).json(updatedLogin);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deleteLogin(req, res) {
        const { id } = req.params;

        try {
            await database.Logins.destroy({
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

module.exports = LoginController;