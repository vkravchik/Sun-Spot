const router = require('express').Router();

const { parseCsvToJson, remapCurrentJson, mapPieJson, mapDataForTwoPieCharts } = require('../utils/parseCsvToJson');

router.get('/parseCsvToJson', (req, res) => {
  const data = parseCsvToJson();

  res.send(data);
});

router.get('/map/highStockJson', (req, res) => {
  const data = remapCurrentJson();

  res.send(data);
});

router.get('/map/pieJson', (req, res) => {
  const data = mapPieJson();

  res.send(data);
});

router.get('/map/pieTwoJson', (req, res) => {
  const data = mapDataForTwoPieCharts();

  res.send(data);
});

module.exports = router;
