module.exports = (sequelize, DataTypes) => {

    const Korisnik = sequelize.define("Korisnik", {
        Ime: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Prezime: {
            type: DataTypes.STRING
        },
        Adresa: {
            type: DataTypes.STRING
        },
        Post_broj: {
            type: DataTypes.STRING
        },
        Mjesto: {
            type: DataTypes.STRING
        },
        OIB: {
            type: DataTypes.STRING
        },
        Br_iskaznice: {
            type: DataTypes.STRING
        },
        Mjesto_izdavanja: {
            type: DataTypes.STRING
        },
        Kontakt: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        },
        Scan_vozacke: {
            type: DataTypes.STRING
        },
        Scan_osobne: {
            type: DataTypes.STRING
        }
    })

    return Korisnik

}