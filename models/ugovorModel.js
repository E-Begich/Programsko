module.exports = (sequelize, DataTypes) => {

    const Ugovor = sequelize.define("Ugovor", {  
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