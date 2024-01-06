const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const authRouters = require('./routes/auth.route.js');
const userRouters = require('./routes/user.route.js');

const app = express();


app.use(express.json())
app.use(cors())

app.use("/auth", authRouters);
app.use("/api/users", userRouters);


dotenv.config()

module.exports = app;