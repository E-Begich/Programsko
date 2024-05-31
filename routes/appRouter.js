//ovdje uvozimo kontrolere za svaku tablicu posebno - u kontrolerima su funkcije za svaku tablicu posebno
//za pregled, dodavanje, brisanje i uređivanje
const klijentProfilController = require('../controllers/klijentProfilController.js');
const korisnikController = require('../controllers/korisnikController.js');
const pracenjeController = require('../controllers/pracenjeController.js');
const racunController = require('../controllers/racunController.js');
const ugovorController = require('../controllers/ugovorController.js');
const voziloController = require('../controllers/voziloController.js');
const zahtjevController = require('../controllers/zahtjevController.js');
const zaposlenikController = require('../controllers/zaposlenikController.js');

const router = require('express').Router()

//rute za klijent profil
router.post('/addKlijentProfil', klijentProfilController.addKlijentProfil);
router.get('/getAllKlijentPro', klijentProfilController.getAllKlijentPro);
router.get('/getOneKlijentPro/:id', klijentProfilController.getOneKlijentPro);
router.get('/getKlijentEmail/:Email', klijentProfilController.getKlijentEmail)
router.put('/updateKlijentPro/:id', klijentProfilController.updateKlijentPro);
router.delete('/deleteKlijentPro/:id', klijentProfilController.deleteKlijentPro);

//rute za korisnik tablicu
router.post('/addKorisnik', korisnikController.addKorisnik);
router.get('/getAllKorisnik', korisnikController.getAllKorisnik);
router.get('/getOneKorisnik/:id', korisnikController.getOneKorisnik);
router.put('/updateKorisnik/:id', korisnikController.updateKorisnik);
router.delete('/deleteKorisnik/:id', korisnikController.deleteKorisnik);

//rute za pracenje tablicu
router.post('/addPracenje', pracenjeController.addPracenje);
router.get('/getAllPracenje', pracenjeController.getAllPracenje);
router.get('/getOnePracenje/:id', pracenjeController.getOnePracenje);
router.put('/updatePracenje/:id', pracenjeController.updatePracenje);
router.delete('/deletePracenje/:id', pracenjeController.deletePracenje);

//rute za tablicu racun
router.post('/addRacun', racunController.addRacun);
router.get('/getAllRacun', racunController.getAllRacun);
router.get('/getOneRacun/:id', racunController.getOneRacun);
router.put('/updateRacun/:id', racunController.updateRacun);
router.delete('/deleteRacun/:id', racunController.deleteRacun);

//rute za tablicu ugovor
router.post('/addUgovor', ugovorController.addUgovor);
router.get('/getAllUgovor', ugovorController.getAllUgovor);
router.get('/getOneUgovor/:id', ugovorController.getOneUgovor);
router.put('/updateUgovor/:id', ugovorController.updateUgovor);
router.delete('/deleteUgovor/:id', ugovorController.deleteUgovor);

//rute za tablicu vozilo
router.post('/addVozilo', voziloController.upload , voziloController.addVozilo);
router.get('/getAllVozilo', voziloController.getAllVozilo);
router.get('/getOneVozilo/:id', voziloController.getOneVozilo);
router.put('/updateVozilo/:id', voziloController.upload , voziloController.updateVozilo);
router.delete('/deleteVozilo/:id', voziloController.deleteVozilo);

//rute za tablicu zahtjev
router.post('/addZahtjev', zahtjevController.addZahtjev);
router.get('/getAllZahtjev', zahtjevController.getAllZahtjev);
router.get('/getOneZahtjev/:id', zahtjevController.getOneZahtjev);
router.put('/updateZahtjev/:id', zahtjevController.updateZahtjev);
router.delete('/deleteZahtjev/:id', zahtjevController.deleteZahtjev);

//rute za tablicu zaposlenik
router.post('/addZaposlenik', zaposlenikController.addZaposlenik);
router.get('/getAllZaposlenik', zaposlenikController.getAllZaposlenik);
router.get('/getOneZaposlenik/:id', zaposlenikController.getOneZaposlenik);
router.put('/updateZaposlenik/:id', zaposlenikController.updateZaposlenik);
router.delete('/deleteZaposlenik/:id', zaposlenikController.deleteZaposlenik);

//veza klijent_profil-zahtjev
router.get('/getProfilZahtjev/:id', klijentProfilController.getProfilZahtjev);
//veza vozilo-zahtjev
router.get('/getVoziloZahtjev/:id', voziloController.getVoziloZahtjev);
router.get('/testVoziloZahtjev/:id', voziloController.getVoziloZahtjev);
//veza vozilo pracenje
router.get('/getVoziloPracenje', voziloController.getVoziloPracenje);
//veza vozilo-ugovor
router.get('/getVoziloUgovor', voziloController.getVoziloUgovor);
//veza ugovor-pracenje
router.get('/getUgovorPracenje', ugovorController.getUgovorPracenje);
//veza ugovor-racun
router.get('/getUgovorRacun', ugovorController.getUgovorRacun);
//veza korisnik-ugovor
router.get('/getKorisnikUgovor', korisnikController.getKorisnikUgovor);
//veza zaposlenik-ugovor
router.get('/getZaposlenikUgovor', zaposlenikController.getZaposlenikUgovor);
//



module.exports = router;