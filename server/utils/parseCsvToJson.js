const csvToJson = require('convert-csv-to-json');
const router = require('express').Router();
const path = require('path');
const fs = require('fs');

router.get('/parseCsvToJson', (req, res) => {
  let fileInput = path.join(__dirname, '../dataset', 'sunspot_data.csv');
  let fileOutput = path.join(__dirname, '../dataset', 'sunspot_data_min.json');

  let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fileInput);
  fs.writeFileSync(fileOutput, JSON.stringify(json));

  res.send('Convert Ended');
});

module.exports = router;
