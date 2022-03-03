const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()

const port = 3001

app.get('/', (req, res) => {
    res.send('That is it, got alll out')
})

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
    console.log('port somethinbg something')
})