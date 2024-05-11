module.exports = (sequelize, DataTypes) => {

    const Pracenje = sequelize.define("Pracenje", {
        Latitude: {
            type: DataTypes.STRING
        },
        Longitude: {
            type: DataTypes.STRING
        }
    
    })

    return Pracenje

}