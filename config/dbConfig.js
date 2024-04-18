module.exports = {
    HOST: 'student.veleri.hr',
    USER: 'ebegic1',
    PASSWORD: '11',
    DB: 'rentacar',
    dialect: 'mysql',

    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}