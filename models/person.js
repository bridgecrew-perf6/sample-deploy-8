const { Schema } = require('mongoose')

const Person = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    pets: Array
  },
  { timestamps: true }
)

module.exports = Person