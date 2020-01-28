const router = require('express').Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  let json = require('../dataset/mapped_pie_data');

  const start_date = req.query.start_date || 1999;
  const finish_date = req.query.finish_date || 2010;

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

router.get('/pieMonth', (req, res) => {
  let json = require('../dataset/mapped_two_pie_data');

  const start_date = req.query.start_date || 1818;

  const data = [];
  _.forEach(json[start_date], (el, day) => {
    data.push({
      name: day,
      y: _.reduce(el, (a, b) => a + b)
    })
  });

  res.send(data)
});

router.get('/pieDay', (req, res) => {

});

module.exports = router;
