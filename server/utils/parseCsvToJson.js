const fs = require('fs');
const path = require('path');

const csvToJson = require('convert-csv-to-json');
const _ = require('lodash');

module.exports = {
  parseCsvToJson: () => {
  },

  remapCurrentJson: () => {
    const inputJson = require('../dataset/convertcsv');
    let fileOutput = path.join(__dirname, '../dataset', 'custom_sunspot_data_min.json');

    let newJson = {};

    inputJson.forEach(el => {
      if (!newJson.hasOwnProperty(el.year)) {
        newJson[el.year] = [];
      }
      newJson[el.year].push({
        date: Date.parse(`${el.month}/${el.day}/${el.year}`),
        value: el.number_of_sunspots
      });
    });

    fs.writeFile(fileOutput, JSON.stringify(newJson), (err, data) => {
      if (!err) return fileOutput;
    });

    return newJson
  },

  mapPieJson: () => {
    const inputJson = require('../dataset/pie_data');
    let fileOutput = path.join(__dirname, '../dataset', 'mapped_pie_data.json');

    const newJson = {};

    _.forEach(inputJson, (el) => {
      if (!_.has(newJson, el.year)) {
        newJson[el.year] = [];
      }
      if (el.observations > 0) {
        newJson[el.year].push(el.observations)
      }
    });

    fs.writeFile(fileOutput, JSON.stringify(newJson), (err, data) => {
      if (!err) return fileOutput;
    });

    return newJson
  },

  mapDataForTwoPieCharts: () => {
    const inputJson = require('../dataset/csvjson');
    let fileOutput = path.join(__dirname, '../dataset', 'mapped_two_pie_data.json');

    const newJson = {};

    _.forEach(inputJson, el => {
      if (!_.has(newJson, el.year)) {
        newJson[el.year] = {};
      }
      if (el.observations > 0) {
        if (!_.has(newJson[el.year], el.month)) {
          newJson[el.year][el.month] = [];
        }
        newJson[el.year][el.month].push({observations: el.observations})
      }
    });

    fs.writeFile(fileOutput, JSON.stringify(newJson), (err, data) => {
      if (!err) return fileOutput;
    });

    return newJson
  },
};

