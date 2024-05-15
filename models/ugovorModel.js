module.exports = (sequelize, DataTypes) => {

    const Ugovor = sequelize.define("Ugovor", {
        ID_ugovor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        ID_korisnika: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ID_vozilo: {
            type: DataTypes.STRING
        },
        ID_zaposlenik: {
            type: DataTypes.STRING
        },
        Datum_pocetka: {
            type: DataTypes.DATE
        },
        Datum_zavrsetka: {
            type: DataTypes.DATE
        },
        Status: {
            type: DataTypes.STRING
        },
        Osiguranje: {
            type: DataTypes.STRING
        },
        Napomena: {
            type: DataTypes.STRING
        }
    
    })

    return Ugovor

}