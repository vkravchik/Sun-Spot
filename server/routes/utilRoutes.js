const router = require('express').Router();
const {parseCsvToJson, remapCurrentJson} = require('../utils/parseCsvToJson');


router.get('/parseCsvToJson', (req, res) => {
  const data = parseCsvToJson();

  res.send(data);
});

router.get('/remapJson', (req, res) => {
  const data = remapCurrentJson();

  res.send(data);
});

module.exports = router;
