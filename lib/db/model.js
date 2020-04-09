const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    autoLogin: {
        type: Boolean
    }
}, {
    versionKey: false,
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
})

module.exports = {
    User: mongoose.model('User', user)
}