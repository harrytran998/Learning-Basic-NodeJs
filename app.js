const http = require('http')
const routes = require('./routes')
require('dotenv').config()

const server = http.createServer(routes)

let PORT = process.env.PORT

server.listen(PORT)
