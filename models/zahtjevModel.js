module.exports = (sequelize, DataTypes) => {

    const Zahtjev = sequelize.define("Zahtjev", {
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