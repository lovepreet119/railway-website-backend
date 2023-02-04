const express = require('express');
const cors = require('cors');
require('./db/config');
require('dotenv').config();
const User = require('./db/user');

const app = express();
app.use(express.json())
const PORT = `0.0.0.0:$PORT`;
app.use(cors())


app.get('/users', async (req, res) => {
    let user = await User.find();
    if (user) {
        res.send({ result: user });
    } else {
        res.send({ error: 'User Not Found' });
    }
})

app.get('/home', (req, res) => {
    res.send("You Got This Api");
})
app.listen(process.env.PORT || 4000);
