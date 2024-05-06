module.exports = (sequelize, DataTypes) => {

    const Zahtjev = sequelize.define("Zahtjev", {
        ID_zahtjev: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        ID_klijenta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ID_vozilo: {
            type: DataTypes.STRING
        },
        Datum_pocetka: {
            type: DataTypes.DATE
        },
        Datum_zavrsetka: {
            type: DataTypes.DATE
        },
        Napomena: {
            type: DataTypes.STRING
        }
    })

    return Zahtjev

}