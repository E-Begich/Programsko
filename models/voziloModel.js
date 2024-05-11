module.exports = (sequelize, DataTypes) => {

    const Vozilo = sequelize.define("Vozilo", {
        Marka: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Model: {
            type: DataTypes.STRING
        },
        Godina: {
            type: DataTypes.STRING
        },
        Radni_obujam: {
            type: DataTypes.STRING
        },
        Vrsta_motora: {
            type: DataTypes.STRING
        },
        Kilometri: {
            type: DataTypes.STRING
        },
        Broj_sjedala: {
            type: DataTypes.STRING
        },
        Cijena_dan: {
            type: DataTypes.STRING
        },
        Fotografija: {
            type: DataTypes.STRING
        }
    
    })

    return Vozilo

}