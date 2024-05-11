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

//1. kreiranje vozila (ovo radi zaposlenik)
const addVozilo = async (req, res) => {
    let info = {
        Marka: req.body.Marka,
        Model: req.body.Model,
        Godina: req.body.Godina,
        Radni_obujam: req.body.Radni_obujam,
        Vrsta_motora: req.body.Vrsta_motora,
        Kilometri: req.body.Kilometri,
        Broj_sjedala: req.body.Broj_sjedala,
        Cijena_dan: req.body.Cijena_dan,
        Fotografija: req.body.Fotografija// req.file.path
} 
//unutar ove naredbe kreiramo vozilo te ubacujemo u tablicu Vozilo podatke opisane u info
const vozilo = await Vozilo.create(info)
res.status(200).send(vozilo)

}

//2. preuzimanje svih vozila
const getAllVozilo= async (req, res) => {
    let vozilo = await Vozilo.findAll({})
    res.send(vozilo)
}

//3. preuzmi jedno vozilo
const getOneVozilo= async (req, res) => {

    let id = req.params.id
    let vozilo = await Vozilo.findOne({ where: { id: id}})
    res.status(200).send(vozilo)
}

//4. ažuriraj vozilo 
const updateVozilo = async (req, res) => {
    let id = req.params.id
    const vozilo = await Vozilo.update(req.body, {where: { id: id }})
    res.status(200).send(vozilo)
}

//5. brisanje vozila po id 
const deleteVozilo = async (req, res) => {

    let id = req.params.id
    await Vozilo.destroy({where: { id: id }}) //znaci prvo ide id iz tablice pa onda ovdje kreiran const id
    res.send('Vozilo je obrisano!')
}

//veza Vozilo- Zahtjev sa zahtjevom one to many
const getVoziloZahtjev = async (req, res) => {
    const data = await Vozilo.findAll({
        include: [{
            model: Zahtjev,
            as: 'Zahtjev'
        }],
        where: { id: 2 } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}

//veza Vozilo- pracenje sa zahtjevom one to many
const getVoziloPracenje = async (req, res) => {
    const data = await Vozilo.findAll({
        include: [{
            model: Pracenje,
            as: 'Pracenje'
        }],
        where: { id: 2 } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}

//veza Vozilo- ugovor sa zahtjevom one to many
const getVoziloUgovor = async (req, res) => {
    const data = await Vozilo.findAll({
        include: [{
            model: Ugovor,
            as: 'Ugovor'
        }],
        where: { id: 2 } //ovdje ide id iz prave tablice koju je sequelize sam kreirao
    })
    res.status(200).send(data);
}

module.exports = {
    addVozilo,
    getAllVozilo,
    getOneVozilo,
    updateVozilo,
    deleteVozilo,
    getVoziloZahtjev,
    getVoziloPracenje,
    getVoziloUgovor
}