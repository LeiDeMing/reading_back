const router = require('koa-router')()

async function response(ctx, next) {
    ctx.body = {
        data: {
            code: 200
        }
    }
    await next()
}

router.post('/api/reading_front/user/login', async (ctx, next) => {
    const { request: { body: { autoLogin, name, password ,phone} } } = ctx
    console.log(autoLogin, name, password ,phone)
    ctx.body = {
        code: 200,
        data: []
    }
    await next()
})

module.exports = router