module.exports = (sequelize, DataTypes) => {

    const vozila = sequelize.define("Vozilo", {
        ID_vozilo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
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
            type: DataTypes.BLOB
        }
    
    })

    return vozila

}