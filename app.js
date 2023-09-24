const express = require('express')

const app = express()

app.use(express.static('public'))

app.use('/', )

app.listen(8800)