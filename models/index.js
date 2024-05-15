const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected...')
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//ovdje idu nazivi tablica kako se tocno nazivaju u bazi i nazivi fajlova vezano za svaku tablicu posebno. Ti fajlovi nalaze se ovdje u mapi models
db.Vozilo = require('./voziloModel.js')(sequelize, DataTypes)
db.Klijent_profil = require('./klijentProfilModel.js')(sequelize, DataTypes)
db.Zahtjev = require('./zahtjevModel.js')(sequelize, DataTypes)
db.Ugovor = require('./ugovorModel.js')(sequelize, DataTypes)
db.Pracenje = require('./pracenjeModel.js')(sequelize, DataTypes)
db.Racun = require('./racunModel.js')(sequelize, DataTypes)
db.Korisnik = require('./korisnikModel.js')(sequelize, DataTypes)
db.Zaposlenik = require('./zaposlenikModel.js')(sequelize, DataTypes)

//dio koji je jako bitan za bazu i omogućuje da se bitne informacije iz baze ne izgube
db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})

// veze has many i belongs to
//veza vozilo-zahtjev - prvi dio nalazi se u vozilo controller a link u approuter
db.Vozilo.hasMany(db.Zahtjev, {
    foreignKey: 'ID_vozilo',
    as: 'Zahtjev'
})
db.Zahtjev.belongsTo(db.Vozilo, {
    foreignKey: 'ID_vozilo',
    as: 'Vozilo'
})

//veza klijent profil-zahtjev . prvi dio nalazi se u klijent profil controller a link u app router
db.Klijent_profil.hasMany(db.Zahtjev, {
    foreignKey: 'ID_klijenta',
    as: 'Zahtjev'
})
db.Zahtjev.belongsTo(db.Klijent_profil, {
    foreignKey: 'ID_klijenta',
    as: 'Klijent_profil'
})
//veza vozilo-pracenje - glavni u vozilo kontroler drugi u approuter
db.Vozilo.hasMany(db.Pracenje, {
    foreignKey: 'ID_vozilo',
    as: 'Pracenje'
})
db.Pracenje.belongsTo(db.Vozilo, {
    foreignKey: 'ID_vozilo',
    as: 'Vozilo'
})
 //veza vozilo-ugovor - vozilo može imati više ugovora ali ugovor može imati samo jedno vozilo
db.Vozilo.hasMany(db.Ugovor, {
    foreignKey: 'ID_vozilo',
    as: 'Ugovor'
})
db.Ugovor.belongsTo(db.Vozilo, {
    foreignKey: 'ID_vozilo',
    as: 'Vozilo'
})
//veza ugovor-pracenje
db.Ugovor.hasMany(db.Pracenje, {
    foreignKey: 'ID_ugovor',
    as: 'Pracenje'
})
db.Pracenje.belongsTo(db.Ugovor, {
    foreignKey: 'ID_ugovor',
    as: 'Ugovor'
})
//veza ugovor-račun
db.Ugovor.hasMany(db.Racun, {
    foreignKey: 'ID_ugovor',
    as: 'Racun'
})
db.Racun.belongsTo(db.Ugovor, {
    foreignKey: 'ID_ugovor',
    as: 'Ugovor'
})

//veza korisnik ugovor
db.Korisnik.hasMany(db.Ugovor, {
    foreignKey: 'ID_korisnika',
    as: 'Ugovor'
})
db.Ugovor.belongsTo(db.Korisnik, {
    foreignKey: 'ID_korisnika',
    as: 'Korisnika'
})

//veza zaposlenik-ugovor
db.Zaposlenik.hasMany(db.Ugovor, {
    foreignKey: 'ID_zaposlenik',
    as: 'Ugovor'
})
db.Ugovor.belongsTo(db.Zaposlenik, {
    foreignKey: 'ID_zaposlenik',
    as: 'Zaposlenik'
})
module.exports = db