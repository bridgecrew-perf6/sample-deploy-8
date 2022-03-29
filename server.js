const express = require('express');
const cors = require('cors');
const db = require('./db');
const { Person } = require('./models')


const PORT = process.env.PORT || 3001;
console.log(PORT)
const app = express();

// MIDDLEWARE
app.use(cors())
app.use(express.static(`${__dirname}/client/build`))

app.get('/people', async (req, res) => {
  const people = await Person.find()
  res.json(people)
})

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => {
  console.log('The app is listening')
});



