const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/tk-hotgirls');

const userApiRouter = require('./routers/userApi');
app.use('/api/users', userApiRouter);

app.listen(8008, function(err){
    if (err) console.log(err)
    else console.log("Link start!");
})