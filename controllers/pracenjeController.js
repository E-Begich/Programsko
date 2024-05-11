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

//1. kreiranje pracenja (ovo radi zaposlenik)
const addPracenje = async (req, res) => {
    let info = {
        ID_ugovor: req.body.ID_ugovor,
        ID_vozilo: req.body.ID_vozilo,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude
}
//unutar ove naredbe kreiramo PRACENJE te ubacujemo u tablicu Pracenje podatke opisane u info
const pracenje = await Pracenje.create(info)
res.status(200).send(pracenje)

}

//2. preuzimanje svih praćenja
const getAllPracenje = async (req, res) => {
    let pracenje = await Pracenje.findAll({})
    res.send(pracenje)
}

//3. preuzmi jedno pracenje
const getOnePracenje= async (req, res) => {

    let id = req.params.id
    let pracenje = await Pracenje.findOne({ where: { id: id}})
    res.status(200).send(pracenje)
}

//4. ažuriraj praćenje (također ne treba ali da imamo u slučaju ažuriranja)
const updatePracenje = async (req, res) => {
    let id = req.params.id
    const pracenje = await Pracenje.update(req.body, {where: { id: id }})
    res.status(200).send(pracenje)
}

//5. brisanje pracenja po id (ako zatreba)
const deletePracenje = async (req, res) => {

    let id = req.params.id
    await Pracenje.destroy({where: { id: id }})
    res.send('Ovo praćenje je obrisano!')
}

module.exports = {
    addPracenje,
    getAllPracenje,
    getOnePracenje,
    updatePracenje,
    deletePracenje
}