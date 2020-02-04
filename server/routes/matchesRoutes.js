const router = require('express').Router();
const _ = require('lodash');
const matchList = require('../dataset/matches');

router.get('/', (req, res) => {
  res.send(matchList);
});

module.exports = router;
