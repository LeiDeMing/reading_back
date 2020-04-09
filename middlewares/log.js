const log4js = require('log4js')
const env = process.env.NODE_ENV

log4js.configure({
    appenders: {
        everything: {
            type: file,
            filename: 'logs/back_log.log',
            maxLogSize: 10485760,
            backups: 3,
            compress: true
        },
        dev: {
            type: 'console'
        }
    },
    categories: {
        default: {
            appenders: ['everything'],
            level: 'info'
        },
        dev: {
            appenders: ['dev', 'everything'],
            level: 'debug'
        }
    }
})

let logger = log4js.getLogger()
if (env !== 'produciton') {
    logger = log4js.getLogger('dev')
}

module.exports = logger