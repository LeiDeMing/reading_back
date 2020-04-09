const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const router = require('./router')
const { dbOpen } = require('./lib/db/connect')
const corsOptions = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'X-Requested-With',
    'Access-Control-Allow-Headers': 'Content-Type'
}

dbOpen() //数据库连接

app
    .use(cors(corsOptions))
    .use(bodyParser({
        multipart: true
    }))
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3300, () => {
    console.log('server start!')
})