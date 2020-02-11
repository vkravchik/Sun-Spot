const router = require('express').Router();
const _ = require('lodash');

const MatchesUtils = require( "../utils/matchesUtils");
const HelpfulUtils = require("../utils/helpfulUtils");
const matchList = require('../dataset/matches');

router.get('/', (req, res) => {
  let data = matchList;

  data = HelpfulUtils.modifyDataForTableFormat(_.map(data, (el) => _.omit(el, ['players'])));

  res.send(data);
});

router.get('/nested', (req, res) => {
  let data = matchList;

  if (!_.isEmpty(req.query)) {
    const { matchId } = req.query;

    data = HelpfulUtils.createNestedObjectForTable(data, matchId);

    res.send({[matchId]: data});
  }
  res.status(405).send();
});

router.get('/fb_to_time', (req, res) => {
  res.send(MatchesUtils.ratioOfGameTimeToFirstBloodTime(matchList));
});

router.get('/custom', (req, res) => {
  let data = matchList;

  if (!_.isEmpty(req.query)) {
    const { matchId } = req.query;

    console.log(matchId);

    data = _.filter(data, (el) => el.match_id.toString() === matchId.toString());

    res.send(...data);
  }
  res.status(405).send();
});

module.exports = router;
