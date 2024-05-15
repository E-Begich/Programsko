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

//1. kreiranje zahtjeva (ovo radi registrirani odnosni prijavljeni klijent)
const addZahtjev = async (req, res) => {
    let info = {
        ID_zahtjev: req.body.ID_zahtjev,
        ID_klijenta: req.body.ID_klijenta,
        ID_vozilo: req.body.ID_vozilo,
        Datum_pocetka: req.body.Datum_pocetka,
        Datum_zavrsetka: req.body.Datum_zavrsetka,
        Napomena: req.body.Napomena
}
//unutar ove naredbe kreira se zahtjev te se ubacuje u tablicu Zahtjev podatke opisane u info
const zahtjev = await Zahtjev.create(info)
res.status(200).send(zahtjev)

}

//2. preuzimanje svih zahtjeva
const getAllZahtjev= async (req, res) => {
    let zahtjev = await Zahtjev.findAll({})
    res.send(zahtjev)
}

//3. preuzmi jedan zahtjev
const getOneZahtjev= async (req, res) => {

    let ID_zahtjev = req.params.ID_zahtjev
    let zahtjev = await Zahtjev.findOne({ where: { ID_zahtjev: ID_zahtjev}})
    res.status(200).send(zahtjev)
}

//4. ažuriraj zahtjev 
const updateZahtjev = async (req, res) => {
    let ID_zahtjev = req.params.ID_zahtjev
    const zahtjev = await Zahtjev.update(req.body, {where: { ID_zahtjev: ID_zahtjev }})
    res.status(200).send(zahtjev)
}

//5. brisanje zahtjeva po id (ako zatreba)
const deleteZahtjev = async (req, res) => {

    let ID_zahtjev = req.params.ID_zahtjev
    await Zahtjev.destroy({where: { ID_zahtjev: ID_zahtjev }}) //znaci prvo ide id iz tablice pa onda ovdje kreiran const id
    res.send('Zahtjev je obrisan!')
}

module.exports = {
    addZahtjev,
    getAllZahtjev,
    getOneZahtjev,
    updateZahtjev,
    deleteZahtjev
}