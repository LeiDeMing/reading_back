const { User } = require('./model')

module.exports = {
    async add(userInfo) {
        console.log(userInfo)
    },
    async check({ autoLogin, name, password, phone }) {
        console.log(autoLogin, name, password, phone)
    }
}