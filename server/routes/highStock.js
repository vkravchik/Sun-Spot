const router = require('express').Router();
const _ = require('lodash');

let json = require('../dataset/custom_sunspot_data_min');

const data = [
];

router.get('/', (req, res) => {
  const {start_date = 1999, finish_date = 2010} = req.params;

  json = _.filter(json, (el, year) => year >= start_date && year <= finish_date);

  _.forEach(json, year => {
    _.forEach(year, el => {
      data.push([el.date, el.value]);
    })
  });
  res.send(data)
});

module.exports = router;
