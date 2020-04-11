const { User } = require('./model')

module.exports = {
    async add(userInfo) {
        console.log(userInfo)
    },
    async check({ autoLogin, name, password, phone }) {
        const user = await User.find({ name, password})
        return !!user.length
    }
}