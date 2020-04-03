const Koa = require('koa')
const app = new Koa()
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');


app
    .use(cors({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With',
        'Access-Control-Allow-Headers': 'Content-Type'
    }))
    .use(bodyParser({
        multipart: true
    }))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3300, () => {
    console.log('server start!')
})