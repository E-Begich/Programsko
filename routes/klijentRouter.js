const klijentProfilController = require('../controlers/klijentProfilController.js');

const router = require('express').Router()

router.post('/addKlijenta', klijentProfilController.addKlijenta) //addKlijenta je naziv funkcije iz klijentProfilController
router.get('/getAllKlijentProfil', klijentProfilController.getAllKlijentProfil)
router.get('/:id', klijentProfilController.getOneKlijentProfil)
router.put('/:id', klijentProfilController.updateKlijentProfil)
router.delete('/:id', klijentProfilController.deleteKlijentProfil)

module.exports = router;
