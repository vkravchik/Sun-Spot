const router = require('express').Router();
const _ = require('lodash');

const MatchesUtils = require( "../utils/matchesUtils");
const matchList = require('../dataset/matches');

router.get('/', (req, res) => {
  let data = matchList;

  if (!_.isEmpty(req.query)) {
    const { matchId } = req.query;

    data = _.filter(data, (el) => el.match_id.toString() === matchId.toString());
  } else {
    data = _.map(data, (el) => _.omit(el, ['players']));
  }

  res.send(data);
});

router.get('/fb_to_time', (req, res) => {
  res.send(MatchesUtils.ratioOfGameTimeToFirstBloodTime(matchList));
});

module.exports = router;
