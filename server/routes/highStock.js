const router = require('express').Router();
const _ = require('lodash');

const json = require('../dataset/custom_sunspot_data_min');

const data = [
];

router.get('/', (req, res) => {
  _.forEach(json, year => {
    _.forEach(year, el => {
      data.push([el.date, el.value]);
    })
  });
  res.send(data)
});

module.exports = router;
