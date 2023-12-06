const database = require('../models');

class LojistaController {

    static async getAllLojistas(req,res){
        try {
            const allLojistas = await database.Lojistas.findAll();
            return res.status(200).json(allLojistas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}

module.exports = LojistaController