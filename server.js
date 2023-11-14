require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xhh8hpd.mongodb.net/?retryWrites=true&w=majority`;

const router = require('./routes/routes');

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(router)
app.listen(process.env.PORT, process.env.DB_HOST, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server listening on port 3000");
    }
})


mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to the database');
});



