
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/post');
const express = require('express');
require('dotenv').config();

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
var app = express(); 
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use('/', loginRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use(express.static('public'));

app.listen(process.env.PORT);
