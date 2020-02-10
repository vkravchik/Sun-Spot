require('dotenv/config');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const heroesRoutes = require('./routes/heroesRoutes');
const matchesRoutes = require('./routes/matchesRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../build')));

// Routes
app.use('/api/heroes', heroesRoutes);
app.use('/api/matches', matchesRoutes);

// End-point for testing server live
app.get('/api/ping', (req, res) => {
  res.send('Pong');
});

const port = process.env.PORT || 3001;
// Using for build UI
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
  console.log('Express server is running on localhost:' + port)
});
