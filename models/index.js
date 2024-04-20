const { operatorAliases } = require('sequelize/lib/utils/deprecations');
const dbConfig = require('../config/dbConfig.js');
const {Sequelize, Datatypes} = require('sequelize');

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
    console.log('connected')
})
.catch(err => {
    console.log('Error' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

//Sada tu dohvaćamo podatke iz tablica i nakon toga u mapi models radimo datoteke sa nazivima navedenim ovdje
db.klijent_profil = require('./klijent_profilModel.js')(sequelize, Datatypes)
db.vozilo = require('./voziloModel.js')(sequelize, Datatypes)
db.zahtjev = require('./zahtjevModel.js')(sequelize, Datatypes)
db.korisnik = require('./korisnikModel.js')(sequelize, Datatypes)
db.zaposlenik = require('./zaposlenikModel.js')(sequelize, Datatypes)
db.ugovor = require('./UgovorModel.js')(sequelize, Datatypes)
db.pracenje = require('./pracenjeModel.js')(sequelize, Datatypes)
db.racun = require('./racunModel.js')(sequelize, Datatypes)