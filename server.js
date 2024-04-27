const express = require('express')
const cors = require('cors')


const app = express()

var corOptions = {
    origin: 'https://student.veleri.hr:3306'
}

//middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routers
const router = require('./routes/routes')
app.use('/api/vozila', router)

//testing api
app.get('/', (req, res) => {
    res.json({ message: 'hello from API'})
})

//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})