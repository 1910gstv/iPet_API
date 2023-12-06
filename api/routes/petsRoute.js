const { Router } = require('express');
const PetController = require('../controllers/PetController');

const router = Router()

router.get('/pets', PetController.getAllPets);
router.get('/pets/:id', PetController.getPetById);
router.post('/pets', PetController.createPet);
router.put('/pets/:id', PetController.updatePet);
router.delete('/pets/:id', PetController.deletePet);

module.exports = router