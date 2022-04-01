const express = require('express')
const app = express()

const port = 3001

app.get('/', (req, res) => {
    res.send('That is it, got alll out')
})

app.listen(port, () => {
    console.log('port somethinbg something')
})