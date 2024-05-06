module.exports = (sequelize, DataTypes) => {

    const Korisnik = sequelize.define("Korisnik", {
        ID_korisnika: {
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
            type: DataTypes.BLOB
        },
        Scan_osobne: {
            type: DataTypes.BLOB
        }
    })

    return Korisnik

}