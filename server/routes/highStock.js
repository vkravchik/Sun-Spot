const router = require('express').Router();
const _ = require('lodash');


router.get('/', (req, res) => {
  let json = require('../dataset/custom_sunspot_data_min');

  const start_date = req.query.start_date || 1999;
  const finish_date = req.query.finish_date || 2010;

  const data = [];

  json = _.filter(json, (el, year) => year >= start_date && year <= finish_date);

  _.forEach(json, year => {
    _.forEach(year, el => {
      data.push([el.date, el.value]);
    })
  });

  res.send(data)
});

router.get('/config', (req, res) => {
  let json = require('../dataset/custom_sunspot_data_min');

  const foundedDefaultForStart = 1999;
  const foundedDefaultForFinish = 2010;

  const mappedJson = _.map(json, (el, key) => parseInt(key));

  const min = _.min(mappedJson);
  const max = _.max(mappedJson);

  const defaultStart = _.findIndex(
    mappedJson, el => el === foundedDefaultForStart) === -1
    ? min : foundedDefaultForStart;
  const defaultFinish = _.findIndex(
    mappedJson, el => el ===foundedDefaultForFinish) === -1
    ? max : foundedDefaultForFinish;

  const data = {
    min,
    max,
    defaultStart,
    defaultFinish,
  };

  res.send(data)
});

router.get('/error', (req, res) => {
  res.status(500).send('Chart Error')
});
router.get('/config/error', (req, res) => {
  res.status(500).send('Config Error')
});

module.exports = router;
