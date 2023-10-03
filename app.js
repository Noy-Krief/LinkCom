
// const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const postsRouter = require('./routes/post');
const express = require('express');

// const config = require('./config');
// require('custom-env').env(process.env.NODE_ENV, './config');

mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true });

var app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.json());

app.use('/', postsRouter);

app.listen(8800);