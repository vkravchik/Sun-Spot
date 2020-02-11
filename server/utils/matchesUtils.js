const HelpfulUtils = require('./helpfulUtils');

const _ = require('lodash');

const MatchesUtils = {
  ratioOfGameTimeToFirstBloodTime: (data) => {
    return _.map(
      _.filter(data, (match) => match.first_blood_time >= 30),
      (match) => [
        HelpfulUtils.transformSecondsToMinutes(match.duration),
        HelpfulUtils.transformSecondsToMinutes(match.first_blood_time)
      ]
    )
  },


  customChart: (data, matchId) => {

    let players = _.map(
      _.filter(data, (el) => el.match_id.toString() === matchId.toString()),
      (el) => el.players
    );

    const heroes = _.map(require('../dataset/heroes'), (el) => _.omit(el, 'legs'));

    players = _.map(_.flatten(players), (player) => {
      return ({
        name: _.find(heroes, (hero) => hero.id === player.hero_id).localized_name,
        data: [player.gold_per_min, player.xp_per_min]
      })
    });

    return _.flatten(players);
  }
};

module.exports = MatchesUtils;
