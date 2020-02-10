const router = require('express').Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  let json = require('../dataset/mapped_pie_data');

  const start_date = req.query.startDate || 1999;
  const finish_date = req.query.finishDate || 2010;

  // TODO: Condition for range < 10 years

  const data = [];

  _.forEach(json, (element, year) => {
    if (year >= start_date && year <= finish_date) {
      data.push({
        name: year,
        y: _.reduce(element, (a, b) => a + b)
      })
    }
  });

  res.send(data)
});

module.exports = router;
