module.exports = (sequelize, DataTypes) => {

    const Pracenje = sequelize.define("Pracenje", {
        ID_pracenje: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        ID_ugovor: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ID_vozilo: {
            type: DataTypes.STRING
        },
        Latitude: {
            type: DataTypes.STRING
        },
        Longitude: {
            type: DataTypes.STRING
        }
    
    })

    return Pracenje

}