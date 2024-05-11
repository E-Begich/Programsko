const db = require('../models')

//kreiranje glavnog modela
const Klijent_profil = db.Klijent_profil
const Korisnik = db.Korisnik
const Pracenje = db.Pracenje
const Racun = db.Racun
const Ugovor = db.Ugovor
const Vozilo = db.Vozilo
const Zahtjev = db.Zahtjev
const Zaposlenik = db.Zaposlenik

//1. kreiranje racuna (ovo radi zaposlenik)
const addRacun = async (req, res) => {
    let info = {
        ID_ugovor: req.body.ID_ugovor,
        Cijena: req.body.Cijena,
        Porez: req.body.Porez,
        Ukupna_cijena: req.body.Ukupna_cijena
}
//unutar ove naredbe kreiramo račun te ubacujemo u tablicu Racun podatke opisane u info
const racun = await Racun.create(info)
res.status(200).send(racun)

}

//2. preuzimanje svih računa
const getAllRacun= async (req, res) => {
    let racun = await Racun.findAll({})
    res.send(racun)
}

//3. preuzmi jedan račun
const getOneRacun= async (req, res) => {

    let id = req.params.id
    let racun = await Racun.findOne({ where: { id: id}})
    res.status(200).send(racun)
}

//4. ažuriraj račun ( ne treba ali da imamo u slučaju ažuriranja)
const updateRacun = async (req, res) => {
    let id = req.params.id
    const racun = await Racun.update(req.body, {where: { id: id }})
    res.status(200).send(racun)
}

//5. brisanje računa po id (ako zatreba)
const deleteRacun = async (req, res) => {

    let id = req.params.id
    await Racun.destroy({where: { id: id }})
    res.send('Račun je obrisan!')
}

module.exports = {
    addRacun,
    getAllRacun,
    getOneRacun,
    updateRacun,
    deleteRacun
}