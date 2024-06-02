const db = require('../models');
//upload Fotografije
const multer = require('multer')
const path = require('path')

//kreiranje glavnog modela
const Klijent_profil = db.Klijent_profil
const Korisnik = db.Korisnik
const Pracenje = db.Pracenje
const Racun = db.Racun
const Ugovor = db.Ugovor
const Vozilo = db.Vozilo
const Zahtjev = db.Zahtjev
const Zaposlenik = db.Zaposlenik

//1. kreiranje korisnika (ovo radi zaposlenik)
const addKorisnik = async (req, res) => {
    let info = {
        Ime: req.body.Ime,
        Prezime: req.body.Prezime,
        Adresa: req.body.Adresa,
        Post_broj: req.body.Post_broj,
        Mjesto: req.body.Mjesto,
        OIB: req.body.OIB,
        Br_iskaznice: req.body.Br_iskaznice,
        Mjesto_izdavanja: req.body.Mjesto_izdavanja,
        Kontakt: req.body.Kontakt,
        Email: req.body.Email,
        Scan_vozacke: req.files.Scan_vozacke[0].path,
        Scan_osobne: req.files.Scan_osobne[0].path,
}
//unutar ove naredbe kreiramo korisnik te ubacujemo u tablicu Korisnkk podatke opisane u info
const korisnik = await Korisnik.create(info)
res.status(200).send(korisnik)

}

//2. preuzimanje svih profila klijenata 
const getAllKorisnik = async (req, res) => {
    let korisnik = await Korisnik.findAll({})
    res.send(korisnik)
}

//3. preuzmi jednog korisnika 
const getOneKorisnik = async (req, res) => {

    let id = req.params.id
    let korisnik = await Korisnik.findOne({ where: { id: id}})
    res.status(200).send(korisnik)
}

//3.1 preuzmi korisnika po emailu
const getKorisnikEmail = async (req, res) => {

    let Email = req.params.Email
    const korPro = await Korisnik.findOne({ where: { Email: Email}})
    res.status(200).send(korPro)
}

//4. ažuriraj profil klijenta (također ne treba ali da imamo u slučaju ažuriranja)
const updateKorisnik = async (req, res) => {
    let id = req.params.id
    const korisnik = await Korisnik.update(req.body, {where: { id: id }})
    res.status(200).send(korisnik)
}

//5. brisanje klijenta profila po id 
const deleteKorisnik = async (req, res) => {

    let id = req.params.id
    await Korisnik.destroy({where: { id: id }})
    res.send('Profil korisnika je obrisan!')
}

//veza korisnik-ugovor sa zahtjevom one to many
const getKorisnikUgovor = async (req, res) => {

    const id = req.params.id

    const data = await Korisnik.findOne({
        include: [{
            model: Ugovor,
            as: 'Ugovor'
        }],
        where: { id: id } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}

//učitavanje slike Vozacka
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // cb(null, Date.now() + path.extname(file.originalname)) 
        cb(null, 'SlikeOsobna' )
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)) 
    }
})


const upload = multer({
    storage: storage,
    limits: { fileSize: '1000000' },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimeType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType && extname) {
            return cb(null, true)
        }
        cb('Priloži ispravan format slike')
    }
}).fields([
    { name: 'Scan_vozacke', maxCount: 1 },
    { name: 'Scan_osobne', maxCount: 1 }
  ])


module.exports = {
    addKorisnik,
    getAllKorisnik,
    getOneKorisnik,
    updateKorisnik,
    deleteKorisnik,
    getKorisnikUgovor,
    getKorisnikEmail,
    upload,
}