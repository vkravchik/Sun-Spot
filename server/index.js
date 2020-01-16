const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const csvToJson = require('./utils/parseCsvToJson');
const highStock = require('./routes/highStock');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.use('/api/utils', csvToJson);
app.use('/api/charts/highStock', highStock);

app.get('/api/data', (req, res) => {
    let fileInput = path.join(__dirname, 'dataset', 'sunspot_data.json');
    let data = fs.readFileSync(fileInput);
    let js = JSON.parse(data);

    res.send(js);
});


app.get('/api/ping', (req, res) => {
    res.send('Pong');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log('Express server is running on localhost:' + port)
});
