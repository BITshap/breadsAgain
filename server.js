const express = require('express')
const methodOverride = require('method-override')
const mongoose = require ('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

//mongoose 
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to mongo at: ', process.env.MONGO_URI)})

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Wecome to an Awesome App about Breads!')
})
// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)
// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)



// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


app.listen(PORT, () => {
    console.log('listening on port', PORT);
})