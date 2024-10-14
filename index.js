const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000
const db = require('./data/db');
const User = require('./models/User');
db();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/users', async(req, res) => {
    console.log('req body', req.body)
    const { name, number } = req.body;
    const newUser = new User({ name, number });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully', user: newUser });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})