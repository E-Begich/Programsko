const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const KlijentProfil = sequelize.define("KlijentProfil", {
        ID_Klijenta: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Ime: {
            type: DataTypes.STRING
        },
        Prezime: {
            type: DataTypes.STRING
        },
        Adresa: {
            type: DataTypes.STRING
        },
        Post_br: {
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
    }) //ovo je povezano sa models/index.js linija 36 koda

    return KlijentProfil;
}