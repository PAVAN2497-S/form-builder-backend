const mongoose = require('mongoose')

const configureDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/formbuilder")
        console.log(`connected to db `)

    } catch (e) {
        console.error('error in connecting db', e)
    }
}

module.exports = configureDb