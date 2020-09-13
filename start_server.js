const express = require('express')
const app = express()
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'IandEye')))

app.listen(process.env.port || 8080);

console.log('Running at Port 8080');