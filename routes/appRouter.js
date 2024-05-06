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
router.get('/getOneKlijentPro/:ID_klijenta', klijentProfilController.getOneKlijentPro);
router.put('/updateKlijentPro/:ID_klijenta', klijentProfilController.updateKlijentPro);
router.delete('/deleteKlijentPro/:ID_klijenta', klijentProfilController.deleteKlijentPro);

//rute za korisnik tablicu
router.post('/addKorisnik', korisnikController.addKorisnik);
router.get('/getAllKorisnik', korisnikController.getAllKorisnik);
router.get('/getOneKorisnik/:ID_korisnika', korisnikController.getOneKorisnik);
router.put('/updateKorisnik/:ID_korisnika', korisnikController.updateKorisnik);
router.delete('/deleteKorisnik/:ID_korisnika', korisnikController.deleteKorisnik);

//rute za pracenje tablicu
router.post('/addPracenje', pracenjeController.addPracenje);
router.get('/getAllPracenje', pracenjeController.getAllPracenje);
router.get('/getOneRacun/:ID_pracenje', pracenjeController.getOnePracenje);
router.put('/updatePracenje/:ID_pracenje', pracenjeController.updatePracenje);
router.delete('/deletePracenje/:ID_pracenje', pracenjeController.deletePracenje);

//rute za tablicu racun
router.post('/addRacun', racunController.addRacun);
router.get('/getAllRacun', racunController.getAllRacun);
router.get('/getOneRacun/:ID_racun', racunController.getOneRacun);
router.put('/updateRacun/:ID_racun', racunController.updateRacun);
router.delete('/deleteRacun/:ID_racun', racunController.deleteRacun);

//rute za tablicu ugovor
router.post('/addUgovor', ugovorController.addUgovor);
router.get('/getAllUgovor', ugovorController.getAllUgovor);
router.get('/getOneUgovor/:ID_ugovor', ugovorController.getOneUgovor);
router.put('/updateUgovor/:ID_ugovor', ugovorController.updateUgovor);
router.delete('/deleteUgovor/:ID_ugovor', ugovorController.deleteUgovor);

//rute za tablicu vozilo
router.post('/addVozilo', voziloController.addVozilo);
router.get('/getAllVozilo', voziloController.getAllVozilo);
router.get('/getOneVozilo/:ID_vozilo', voziloController.getOneVozilo);
router.put('/updateVozilo/:ID_vozilo', voziloController.updateVozilo);
router.delete('/deleteVozilo/:ID_vozilo', voziloController.deleteVozilo);

//rute za tablicu zahtjev
router.post('/addZahtjev', zahtjevController.addZahtjev);
router.get('/getAllZahtjev', zahtjevController.getAllZahtjev);
router.get('/getOneZahtjev/:ID_zahtjev', zahtjevController.getOneZahtjev);
router.put('/updateZahtjev/:ID_zahtjev', zahtjevController.updateZahtjev);
router.delete('/deleteZahtjev/:ID_zahtjev', zahtjevController.deleteZahtjev);

//rute za tablicu zaposlenik
router.post('/addZaposlenik', zaposlenikController.addZaposlenik);
router.get('/getAllZaposlenik', zaposlenikController.getAllZaposlenik);
router.get('/getOneZaposlenik/:ID_zaposlenik', zaposlenikController.getOneZaposlenik);
router.put('/updateZaposlenik/:ID_zaposlenik', zaposlenikController.updateZaposlenik);
router.delete('/deleteZaposlenik/:ID_zaposlenik', zaposlenikController.deleteZaposlenik);

//OVDJE IDU RUTE ZA VEZE IZMEĐU TABLICA
//veza vozilo-zahtjev
router.get('/getVoziloZahtjev', voziloController.getVoziloZahtjev);

//veza klijent profil-zahtjev
router.get('/getProfilZahtjev', klijentProfilController.getProfilZahtjev);

//veza vozilo-pracenje
router.get('/getVoziloPracenje', voziloController.getVoziloPracenje);

//veza vozilo-ugovor
router.get('/getVoziloUgovor', voziloController.getVoziloUgovor);

//veza ugovor-pracenje
router.get('/getUgovorPracenje', ugovorController.getUgovorPracenje);

//veza ugovor-racun
router.get('/getUgovorRacun', ugovorController.getUgovorRacun);

// veza korisnik-ugovor - 1korisnik m ugovora
router.get('/getUgovorKorisnik', korisnikController.getUgovorKorisnik);

// veza zaposlenik ugovor 1 zaposlenik m ugovora
router.get('/getZaposlenikUgovor', zaposlenikController.getZaposlenikUgovor);

module.exports = router;