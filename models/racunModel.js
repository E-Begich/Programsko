module.exports = (sequelize, DataTypes) => {

    const Racun = sequelize.define("Racun", {
        Cijena: {
            type: DataTypes.STRING
        },
        Porez: {
            type: DataTypes.STRING
        },
        Ukupna_cijena: {
            type: DataTypes.STRING
        }
    
    })

    return Racun

}