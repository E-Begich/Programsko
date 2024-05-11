module.exports = (sequelize, DataTypes) => {

    const Zaposlenik = sequelize.define("Zaposlenik", {
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