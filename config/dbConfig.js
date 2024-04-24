//podaci za spajanje na bazu
module.exports = {
    HOST: 'student.veleri.hr',
    USER: 'dpajovic',
    PASSWORD: 'cedevita123',
    DB: 'dpajovic',
    dialect: 'mysql',

    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}