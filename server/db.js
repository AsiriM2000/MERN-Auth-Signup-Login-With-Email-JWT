const mongoose = require("mongoose");

module.exports = () =>{
    try {
        mongoose.connect(process.env.DB);
        console.log('Connected to databse successfully');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database!');
    }
}