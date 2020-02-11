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


  GPM: (data) => {
    return _.map(data['players'], (el) => {

    })
  }
};

module.exports = MatchesUtils;
