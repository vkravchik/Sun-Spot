// const express = require('express');
import express from 'express';
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/ping', (req, res) => {
    res.send('Pong');
});

const port = process.env.PORT || 3001;

app.listen(port, () =>{
    console.log('Express server is running on localhost:' + port)
});
