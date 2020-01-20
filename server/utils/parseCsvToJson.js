const csvToJson = require('convert-csv-to-json');
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
const moment = require('moment');

const json = require('../dataset/convertcsv');

module.exports = {
  parseCsvToJson: () => {
    let fileInput = path.join(__dirname, '../dataset', 'sunspot_data.csv');
    let fileOutput = path.join(__dirname, '../dataset', 'sunspot_data_min.json');

    let json = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(fileInput);
    fs.writeFileSync(fileOutput, JSON.stringify(json));

    return fileOutput
  },

  remapCurrentJson: () => {
    let fileOutput = path.join(__dirname, '../dataset', 'custom_sunspot_data_min.json');

    let newJson = {};

    json.forEach(el => {
      if (!newJson.hasOwnProperty(el.year)) {
        newJson[el.year] = [];
      }
      newJson[el.year].push({"date": Date.parse(`${el.month}/${el.day}/${el.year}`), "value": el.number_of_sunspots});
    });

    console.log(newJson);

    fs.writeFile(fileOutput, JSON.stringify(newJson), (err, data) => {
      if (!err) return fileOutput;
    });

    return newJson

  }
};

