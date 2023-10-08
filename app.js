
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
require('dotenv').config();

// configure routers
const loginRouter = require('./routes/login');
const postsRouter = require('./routes/post');
const accountRouter = require('./routes/account');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });
var app = express(); 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
    secret: 'your-secret-key', // Replace with a strong secret key
    resave: false,
    saveUninitialized: true
  }));

app.use('/', loginRouter);
app.use('/', postsRouter);
app.use('/', accountRouter);

app.get('/', (req, res) => {
    res.redirect('/login')
});

app.use(express.static('public'));

app.listen(process.env.PORT);
