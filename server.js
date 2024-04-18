const express = require('express')
const cors = require('cors')
const app = express()


var corOptions = {
origin: 'https://localhost:8081'

}
 //middleware
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//testing api
app.get('/', (req, res) => {
    res.json({message: 'Hello api'})
})
//port
const PORT = process.env.PORT || 8080

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})