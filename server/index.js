import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/api/ping', (req, res) => {
    res.send('Pong');
});

const port = process.env.SERVER_PORT || 3001;

app.listen(port, () =>{
    console.log('Express server is running on localhost:' + port)
});
