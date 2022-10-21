const mongoose = require('mongoose')
const baker = require('../controllers/bakers_controller')
const Bread = require('./bread')

const bakerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
    },
    startDate: {
        type: Date,
        required: true
    },
    bio: String
})

bakerSchema.post('findOneAndDelete', function(){
    Bread.deleteMany({baker: this._conditions._id})
    .then(deleteStatus => {
        console.log(deleteStatus)
    })

})

bakerSchema.virtual('breads', {
    ref: 'Bread',
    localField: '_id',
    foreignField: 'baker'
})

const Baker = mongoose.model('Baker', bakerSchema)
module.exports = Baker