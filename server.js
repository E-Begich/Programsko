const express = require('express')
const cors = require('cors')

const app = express()

//var corOptions = {
 //   origin: 'https://localhost:8081'
//}



//ovdje je middleware
//app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


//routers - ovdje importamo fajl iz mape routes - ovdje koristimo url /api/profili/addKlijentProfil i ostale iz mape appRouter
const router = require('./routes/appRouter.js')
app.use('/api/aplikacija', router)


//test API
app.get('/', (req, res) => {
    res.json({ message: 'Hello API'})
})

//port
const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`Server is running port ${PORT}`)
})