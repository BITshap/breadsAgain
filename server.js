const express = require('express')
const methodOverride = require('method-override')
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()


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

const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)
app.listen(PORT, () => {
    console.log('listening on port', PORT);
})

app.get('*', (req,res) => {
    res.send('404')
})