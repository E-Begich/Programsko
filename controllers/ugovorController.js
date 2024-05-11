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

//1. kreiranje ugovora (ovo radi zaposlenik)
const addUgovor = async (req, res) => {
    let info = {
        ID_vozilo: req.body.ID_vozilo,
        ID_korisnik: req.body.ID_korisnik,
        ID_zaposlenik: req.body.ID_zaposlenik,
        Datum_pocetka: req.body.Datum_pocetka,
        Datum_zavrsetka: req.body.Datum_zavrsetka,
        Status: req.body.Status,
        Osiguranje: req.body.Osiguranje,
        Napomena: req.body.Napomena
}
//unutar ove naredbe kreiramo ugovor te ubacujemo u tablicu Ugovor podatke opisane u info
const ugovor = await Ugovor.create(info)
res.status(200).send(ugovor)

}

//2. preuzimanje svih računa
const getAllUgovor= async (req, res) => {
    let ugovor = await Ugovor.findAll({})
    res.send(ugovor)
}

//3. preuzmi jedan ugovor
const getOneUgovor= async (req, res) => {

    let id = req.params.id
    let ugovor = await Ugovor.findOne({ where: { id: id}})
    res.status(200).send(ugovor)
}

//4. ažuriraj ugovor ( ne treba ali da imamo u slučaju ažuriranja)
const updateUgovor = async (req, res) => {
    let id = req.params.id
    const ugovor = await Ugovor.update(req.body, {where: { id: id }})
    res.status(200).send(ugovor)
}

//5. brisanje ugovora po id (ako zatreba)
const deleteUgovor = async (req, res) => {

    let id = req.params.id
    await Ugovor.destroy({where: { id: id }}) //znaci prvo ide id iz tablice pa onda ovdje kreiran const id
    res.send('Ugovor je obrisan!')
}

//veza Ugovor-pracenje sa zahtjevom one to many
const getUgovorPracenje = async (req, res) => {
    const data = await Ugovor.findAll({
        include: [{
            model: Pracenje,
            as: 'Pracenje'
        }],
        where: { id: 2 } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}

//veza Ugovor-racun sa zahtjevom one to many
const getUgovorRacun = async (req, res) => {
    const data = await Ugovor.findAll({
        include: [{
            model: Racun,
            as: 'Racun'
        }],
        where: { id: 2 } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}


module.exports = {
    addUgovor,
    getAllUgovor,
    getOneUgovor,
    updateUgovor,
    deleteUgovor,
    getUgovorPracenje,
    getUgovorRacun

}