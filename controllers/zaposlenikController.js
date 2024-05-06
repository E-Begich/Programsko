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

//1. kreiranje zaposlenika 
const addZaposlenik = async (req, res) => {
    let info = {
        ID_zaposlenik: req.body.ID_zaposlenik,
        Ime: req.body.Ime,
        Prezime: req.body.Prezime,
        Sifra_zaposlenika: req.body.Sifra_zaposlenika,
        Lozinka: req.body.Lozinka
}
//unutar ove naredbe kreira se zahtjev te se ubacuje u tablicu Zahtjev podatke opisane u info
const zaposlenik = await Zaposlenik.create(info)
res.status(200).send(zaposlenik)

}

//2. preuzimanje svih zaposlenika
const getAllZaposlenik = async (req, res) => {
    let zaposlenik = await Zaposlenik.findAll({})
    res.send(zaposlenik)
}

//3. preuzmi jednog zaposlenika
const getOneZaposlenik= async (req, res) => {

    let ID_zaposlenik = req.params.ID_zaposlenik
    let zaposlenik = await Zaposlenik.findOne({ where: { ID_zaposlenik: ID_zaposlenik}})
    res.status(200).send(zaposlenik)
}

//4. ažuriraj podatke zaposlenika
const updateZaposlenik = async (req, res) => {
    let ID_zaposlenik = req.params.ID_zaposlenik
    const zaposlenik = await Zaposlenik.update(req.body, {where: { ID_zaposlenik: ID_zaposlenik }})
    res.status(200).send(zaposlenik)
}

//5. brisanje zaposlenika po id (ako zatreba)
const deleteZaposlenik = async (req, res) => {

    let ID_zaposlenik = req.params.ID_zaposlenik
    await Zaposlenik.destroy({where: { ID_zaposlenik: ID_zaposlenik }}) //znaci prvo ide id iz tablice pa onda ovdje kreiran const id
    res.send('Zaposlenik je obrisan!')
}

//veza zaposlenik-ugovor
const getZaposlenikUgovor = async (req, res) => {
    const data = await Zaposlenik.findAll({
        include: [{
            model: Ugovor,
            as: 'Ugovor'
        }],
        where: { ID_zaposlenik: 1}
    })
    res.status(200).send(data);
}

module.exports = {
    addZaposlenik,
    getAllZaposlenik,
    getOneZaposlenik,
    updateZaposlenik,
    deleteZaposlenik,
    getZaposlenikUgovor
}