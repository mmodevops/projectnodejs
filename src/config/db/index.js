const mongoose = require('mongoose')

async function connect() {
    mongoose.connect("mongodb://localhost:27017/f8_education_dev", {
        useNewUrlParser: true
    })
    mongoose.connection
        .once('open', () => console.log('Connect successfully!'))
        .on('error', (error) => {
            console.log("Your Error", error)
        })
}

module.exports = { connect }
