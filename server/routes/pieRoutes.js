const router = require('express').Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  let json = require('../dataset/mapped_pie_data');

  const data = [];

  _.forEach(json, (el, year) => {
    data.push({
      name: year,
      y: _.reduce(el, (a, b) => a + b)
    })
  });

  res.send(data)
});

module.exports = router;
