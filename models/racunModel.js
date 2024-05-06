module.exports = (sequelize, DataTypes) => {

    const Racun = sequelize.define("Racun", {
        ID_racun: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        ID_ugovor: {
            type: DataTypes.STRING,
            allowNull: false
        },
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