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
    console.log(ctx)
    ctx.body = {
        code: 200,
        data: []
    }
    await next()
})

module.exports = router