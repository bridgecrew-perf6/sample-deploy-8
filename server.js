const express = require('express');
const cors = require('cors');
const db = require('./db');
const { Person } = require('./models')


const PORT = process.env.port || 3001;
const app = express();

// MIDDLEWARE
app.use(cors())

app.get('/people', async (req, res) => {
  const people = await Person.find()
  res.json(people)
})


app.listen(PORT, () => {
  console.log('The app is listening')
});



