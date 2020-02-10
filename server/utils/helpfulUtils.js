const _ = require('lodash');

const HelpfulUtils = {
  transformSecondsToMinutes: (seconds) => Number((seconds / 60).toFixed(1)),

  modifyDataForPieChartFormat: (data) => {
    return _.map(data, (el, key) => ({
      name: key,
      y: el
    }))
  },

  modifyDataForTableFormat: (data) => {
    const newData = [];
    const columns = [];

    Object.keys(data[0]).forEach((el) => {
      columns.push({
        title: el,
        dataIndex: el,
        key: el
      });
    });

    data.forEach((el) => {
      const obj = [];
      columns.map((ele) => ele.key).forEach((key) => {

        if (key === 'duration' || key === 'first_blood_time') {
          el[key] = Number((el[key] / 60).toFixed(1))
        }

        if (key === 'radiant_win') {
          el[key] = el[key].toString()
        }

        obj.push({
          [key]: el[key]
        });
      });

      newData.push(Object.assign({key: el.match_id}, ...obj));
    });

    return _.map(newData, (el) => _.omit(el, ['match_id']));
  },

  createNestedObjectForTable : (data, matchId) => {
    let players = _.map(
      _.filter(data, (el) => el.match_id.toString() === matchId.toString()),
      (el) => el.players
    );

    const heroes = _.map(require('../dataset/heroes'), (el) => _.omit(el, 'legs'));

    players = _.map(_.flatten(players), (player) => {
      return ({
        key: player.player_slot,
        hero_id: _.find(heroes, (hero) => hero.id === player.hero_id).localized_name,
        kills: player.kills,
        deaths: player.deaths,
        assists: player.assists,
        gold_per_min: player.gold_per_min,
        xp_per_min: player.xp_per_min,
        isRadiant: player.isRadiant.toString()
      })
    });

    return _.flatten(players)

  }
};

module.exports = HelpfulUtils;
