const database = require('../models');

class PetController {
    static async getAllPets(req,res){
        try {
            const allPets = await database.Pets.findAll({
                attributes: [
                    'id', 'nome', 'usuario_id'
                ]
            });
            return res.status(200).json(allPets)
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async getPetById(req,res) {
        const { id } = req.params;

        try {
            const Pet = await database.Pets.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'usuario_id'
                ]
            });
            return res.status(200).json(Pet)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createPet(req, res) {
        const newPet = req.body;

        try {
            const newPetCreated = await database.Pets.create(newPet);
            return res.status(200).json(newPetCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePet(req, res) {
        const { id } = req.params;
        const newInfo = req.body;

        try {
            await database.Pets.update(newInfo, {
                where: {
                    id: Number(id)
                }
            });
            const updatedPet = await database.Pets.findOne({
                where: {
                    id: Number(id)
                },
                attributes: [
                    'id', 'nome', 'usuario_id'
                ]
            });
            return res.status(200).json(updatedPet)
        } catch (error) {
            return res.status(500).json(error.message);

        }
    }

    static async deletePet(req, res) {
        const { id } = req.params;

        try {
            await database.Pets.destroy({
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

module.exports = PetController