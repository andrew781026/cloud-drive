const log4js = require('log4js');

class Log4jsUtils {

    static initLog4js({log4js}) {

        let appenders = {
            console: {type: 'console'},
            accessLog: {type: 'dateFile', filename: 'logs/access-electron.log', daysToKeep: 90},
            errorLog: {type: 'dateFile', filename: 'logs/error-electron.log', daysToKeep: 90},

            alerts: {type: 'logLevelFilter', appender: 'slack', level: 'error'}, // 將 slack 註冊到 error 等級

            logs: {type: 'logLevelFilter', appender: 'accessLog', level: 'info'},
            errors: {type: 'logLevelFilter', appender: 'errorLog', level: 'error'},
        };
        let defaultAppenders = ['console', 'logs', 'errors','alerts'];
        log4js.configure({
            appenders,
            categories: {
                default: {appenders: defaultAppenders, level: 'debug'},
            },
        });
    }

    static getLogger = () => log4js.getLogger();
}

module.exports = Log4jsUtils;
