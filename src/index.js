const express = require('express')
const morgan = require('morgan')
const path = require('path')
const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middelware
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Global variables
app.use((req, res, next) => {
    next()
})

//public
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use(require(`./routes/index`))

//Starting server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
})