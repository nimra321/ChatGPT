const mongoose = require("mongoose");

const colors = require("colors");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to the MONGO DB Database ${mongoose.connection.host}` .bgGreen.white);
    } catch (error) {
        console.log(`MongoDB database error ${error} ` .bgRed.white);
    }
}

module.exports = connectDB