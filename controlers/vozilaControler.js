const db = require('../models')

//glavni model
const Vozilo = db.Vozila

//1. kreiranje vozila
const addVozilo = async (req, res) => {
    let info = {
        ID_Vozilo: req.body.ID_Vozilo,
        Marka: req.body.Marka,
        Model: req.body.Model,
        Godina: req.body.Godina,
        Radni_obujam: req.body.Radni_obujam,
        Vrsta_motora: req.body.Vrsta_motora,
        Kilometri: req.body.Kilometri,
        Broj_sjedala: req.body.Broj_sjedala,
        Cijena_dan: req.body.Cijena_dan,
        Fotografija: req.body.Fotografija
    }

    const vozilo = await Vozilo.create(info)
    res.status(200).send(vozilo)
}

//2. preuzmi sva vozila
const getAllVozilo = async (req, res) => {
    let vozila = await Vozilo.findAll({})
    res.send(vozila)
}



//3. preuzmi jedno vozilo
const getVozilo = async (req, res) => {

    let id = req.params.ID_Vozilo
    let vozilo = await Vozilo.findOne({ where: { id: id}})
    res.send(vozilo)
}



//4. ažuriraj vozilo
const updateVozilo = async (req, res) => {
    let id = req.params.ID_Vozilo
    const vozilo = await Vozilo.update(req.body, {where: { id: id }})
    res.status(200).send(vozilo)
}

//5. brisanje vozila po id
const deleteVozilo = async (req, res) => {

    let id = req.params.ID_Vozilo
    await Vozilo.destroy({where: { id: id }})
    res.send('Vozilo je obrisano!')
}

module.exports = {
    addVozilo,
    getAllVozilo,
    getVozilo,
    updateVozilo,
    deleteVozilo
}