const mongoose = require("mongoose")

module.exports = () => {
    try {
        mongoose.connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Connected to database succsefully")
    } catch (error) {
        console.log("Error")
        console.log("Connection failed")
    }
}