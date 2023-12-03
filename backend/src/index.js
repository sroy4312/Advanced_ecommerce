const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express()

app.use(express.json())
app.use(cors())

dotenv.config()

app.get("/", (req, res) => {
    return res.status(200).send({message: "Hello", status: true});
})

module.exports = app;