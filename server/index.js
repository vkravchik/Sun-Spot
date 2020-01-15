import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/ping', (req, res) => {
    res.send('Pong');
});

app.listen(process.env.SERVER_PORT || 3001, () =>{
    console.log('Express server is running on localhost:' + process.env.SERVER_PORT)
});
