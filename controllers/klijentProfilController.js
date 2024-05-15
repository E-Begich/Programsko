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

//1. kreiranje klijent profila
const addKlijentProfil = async (req, res) => {
    let info = {
        ID_klijenta: req.body.ID_klijenta,
        Ime: req.body.Ime,
        Prezime: req.body.Prezime,
        Adresa: req.body.Adresa,
        Post_broj: req.body.Post_broj,
        Mjesto: req.body.Mjesto,
        Kontakt: req.body.Kontakt,
        Email: req.body.Email,
        Kor_ime: req.body.Kor_ime,
        Lozinka: req.body.Lozinka
}
//unutar ove naredbe kreiramo klijentPro te ubacujemo u tablicu Klijent_Profil podatke opisane u info
const klijentPro = await Klijent_profil.create(info)
res.status(200).send(klijentPro)

}

//2. preuzimanje svih profila klijenata (ovo nam ne treba ali u slucaju neke nadogradnje da imamo spremnu funkciju)
const getAllKlijentPro = async (req, res) => {
    let korPro = await Klijent_profil.findAll({})
    res.send(korPro)
}

//3. preuzmi jednog klijenta (također nam ne treba ali u slucaju neke nadogradnje da imamo spremnu funkciju)
const getOneKlijentPro = async (req, res) => {

    let ID_klijenta = req.params.ID_klijenta
    let korPro = await Klijent_profil.findOne({ where: { ID_klijenta: ID_klijenta}})
    res.status(200).send(korPro)
}

//4. ažuriraj profil klijenta (također ne treba ali da imamo u slučaju ažuriranja)
const updateKlijentPro = async (req, res) => {
    let ID_klijenta = req.params.ID_klijenta
    const korPro = await Klijent_profil.update(req.body, {where: { ID_klijenta: ID_klijenta }})
    res.status(200).send(korPro)
}

//5. brisanje klijenta profila po id (također ne treba ali da imamo u slučaju ažuriranja)
const deleteKlijentPro = async (req, res) => {

    let ID_klijenta = req.params.ID_klijenta
    await Klijent_profil.destroy({where: { ID_klijenta: ID_klijenta }})
    res.send('Profil korisnika je obrisan!')
}
//veza klijent profil sa zahtjevom
const getProfilZahtjev = async (req, res) => {
    const data = await Klijent_profil.findAll({
        include: [{
            model: Zahtjev,
            as: 'Zahtjev'
        }],
        where: { ID_klijenta: 1}
    })
    res.status(200).send(data);
}
module.exports = {
    addKlijentProfil,
    getAllKlijentPro,
    getOneKlijentPro,
    updateKlijentPro,
    deleteKlijentPro,
    getProfilZahtjev
}

