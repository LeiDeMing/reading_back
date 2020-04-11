const { add, check } = require('../lib/db/user')

module.exports = {
    async addUser(userInfo) {

    },
    async checkUser(userInfo) {
        const { name, password } = userInfo
        const haveUser = await check({ name, password })
        return haveUser
    }
}