const mongoose = require('mongoose')
const PersonSchema = require('./person')

const Person = mongoose.model('people', PersonSchema)

module.exports = {
  Person
}