const Config = require('../config')

global.config = {
    apiurl: 'http://192.168.0.114:'+Config.port,
    user: null
}

describe("\n\n--- Setting Test Environment. ---", require('./setup').Test)
describe("\n\n--- Auth API tests. ---", require('./auth').Test)