const router = require('koa-router')()
const user = require('./actions/user')

async function response(ctx, next) {
    ctx.body = {
        data: {
            code: 200
        }
    }
    await next()
}

router.post('/api/reading_front/user/login', async (ctx, next) => {
    const { request: { body: { autoLogin, name, password, phone } } } = ctx
    const haveUser = await user.checkUser({ autoLogin, name, password, phone })
    console.log(haveUser)
    if (haveUser) {
        ctx.body = {
            code: 200,
            msg: '登陆成功！',
            data: []
        }
    } else {
        ctx.status = 400
        ctx.body = {
            code: 400,
            msg: '登陆失败！',
            data: []
        }
    }
    await next()
})

module.exports = router