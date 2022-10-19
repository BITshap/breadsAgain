const mongoose = require('mongoose')
const { Schema } = mongoose

const breadSchema = new Schema ({
  name: {type: String, required: true},
  hasGluten: Boolean,
  image: {type: String, default: 'https://static01.nyt.com/images/2013/03/03/magazine/03wmt1/03wmt1-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale'},
  ingredients: ['flour ', 'water ', 'yeast.'],
  baker: {
    type: String,
    enum: ['Rachel', 'Monica', 'Joey', 'Chandler', 'Ross', 'Phoebe']
  }
})
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker}`
}
const Bread = mongoose.model('Bread', breadSchema)
module.exports = Bread