module.exports = (sequelize, DataTypes) => {

    const Zaposlenik = sequelize.define("Zaposlenik", {
        ID_zaposlenik: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        Ime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Prezime: {
            type: DataTypes.STRING
        },
        Sifra_zaposlenika: {
            type: DataTypes.STRING
        },
        Lozinka: {
            type: DataTypes.STRING
        }
    
    })

    return Zaposlenik

}