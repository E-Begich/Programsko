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
        ID_ugovor: req.body.ID_ugovor,
        ID_korisnika: req.body.ID_korisnika,
        ID_vozilo: req.body.ID_vozilo,
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

    let ID_ugovor = req.params.ID_ugovor
    let ugovor = await Ugovor.findOne({ where: { ID_ugovor: ID_ugovor}})
    res.status(200).send(ugovor)
}

//4. ažuriraj ugovor ( ne treba ali da imamo u slučaju ažuriranja)
const updateUgovor = async (req, res) => {
    let ID_ugovor = req.params.ID_ugovor
    const ugovor = await Ugovor.update(req.body, {where: { ID_ugovor: ID_ugovor }})
    res.status(200).send(ugovor)
}

//5. brisanje ugovora po id (ako zatreba)
const deleteUgovor = async (req, res) => {

    let ID_ugovor = req.params.ID_ugovor
    await Ugovor.destroy({where: { ID_ugovor: ID_ugovor }}) //znaci prvo ide id iz tablice pa onda ovdje kreiran const id
    res.send('Ugovor je obrisan!')
}

//veza ugovor-pracenje
const getUgovorPracenje = async (req, res) => {
    const data = await Ugovor.findAll({
        include: [{
            model: Pracenje,
            as: 'Pracenje'
        }],
        where: { ID_ugovor: 1}
    })
    res.status(200).send(data);
}

//veza ugovor-racun
const getUgovorRacun = async (req, res) => {
    const data = await Ugovor.findAll({
        include: [{
            model: Racun,
            as: 'Racun'
        }],
        where: { ID_ugovor: 1}
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