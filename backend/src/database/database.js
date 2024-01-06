const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully.");
    } catch (err) {
        throw err.message;
    }
}

module.exports = connectDB;