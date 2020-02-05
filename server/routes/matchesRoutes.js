const router = require('express').Router();
const _ = require('lodash');

const MatchesUtils = require( "../utils/matchesUtils");
const matchList = require('../dataset/matches');

router.get('/', (req, res) => {
  res.send(matchList);
});

router.get('/fb_to_time', (req, res) => {
  res.send(MatchesUtils.ratioOfGameTimeToFirstBloodTime(matchList));
});

module.exports = router;
