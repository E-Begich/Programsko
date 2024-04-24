const db = require('../models');

//kreiranje glavnog modela
const KlijentProfil = db.klijentProfil;

//1. kreiranje klijenta

const addKlijenta = async (req, res) => {
    let info = {
        ID_Klijenta: req.body.ID_Klijenta,
        Ime: req.body.Ime,
        Prezime: req.body.Prezime,
        Adresa: req.body.Adresa,
        Post_br: req.body.Post_br,
        Mjesto: req.body.Mjesto,
        Kontakt: req.body.Kontakt,
        Email: req.body.Email,
        Kor_ime: req.body.Kor_ime,
        Lozinka: req.body.Lozinka
    }

    const klijentProfil = await KlijentProfil.create(info) //povlačimo iz linije koda 4 iz ovog dokumenta
    res.status(200).send(klijentProfil)
    console.log(klijentProfil)
}

//2. preuzimanje svih podataka iz tablice Klijent_profil
const getAllKlijentProfil = async (req, res) => {

    let klijentProfili = await KlijentProfil.findAll({
      /*  attributes: [
            'Id_Klijenta',
            'Ime',
            'Prezime',
            'Adresa',
            'Post_br',
            'Mjesto',
            'Kontakt',
            'Email',
            'Kor_ime',
            'Lozinka'
        ]*/
    })
    res.status(200).send(klijentProfili)
}

//ispis jednog profila klijenta po id
const getOneKlijentProfil = async (req, res) => {
   
    let id = req.params.id;
    let klijentProfil = await KlijentProfil.findOne({ where: {id: id}});
    res.status(200).send(klijentProfil);
}

//update profila klijenta
const updateKlijentProfil = async (req, res) => {
   
    let id = req.params.id;
    
    const klijentProfil = await KlijentProfil.update(req.body, { where: {id: id}})
    res.status(200).send(klijentProfil);
}

//brisanje profila klijenta
const deleteKlijentProfil = async (req, res) => {
   
    let id = req.params.id;
    await KlijentProfil.destroy({ where: {id: id}});
    res.status(200).send('Klijent je obrisan');
}

module.exports = {
    addKlijenta,
    getAllKlijentProfil,
    getOneKlijentProfil,
    updateKlijentProfil,
    deleteKlijentProfil
}