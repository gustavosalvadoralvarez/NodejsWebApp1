"use strict;"

const http = require('http');
const PORT = process.env.port || 1337;
const ecstatic = require('ecstatic');

http.createServer(
    ecstatic({ root: __dirname + '/public' })
).listen(PORT);

