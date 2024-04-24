const db = require('../models');

//kreiranje glavnog modela
const KlijentProfil = db.klijent_profil;

//1. kreiranje klijenta

const dodajKlijenta = async (req, res) => {
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

    const KlijentProfil = await KlijentProfil.create(info) //povlačimo iz linije koda 4 iz ovog dokumenta
    res.status(200).send(KlijentProfil)
    console.log(KlijentProfil)
}

//2. preuzimanje svih podataka iz tablice Klijent_profil
const getAllKlijent_profil = async (req, res) => {

    let KlijentProfil = await KlijentProfil.findAll({
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
    res.status(200).send(KlijentProfil)//37:23

}