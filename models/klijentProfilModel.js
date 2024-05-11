module.exports = (sequelize, DataTypes) => {

    const Klijent_profil = sequelize.define("Klijent_profil", {
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
        Kontakt: {
            type: DataTypes.STRING
        },
        Email: {
            type: DataTypes.STRING
        },
        Kor_ime: {
            type: DataTypes.STRING
        },
        Lozinka: {
            type: DataTypes.STRING
        }
    
    })

    return Klijent_profil;
}