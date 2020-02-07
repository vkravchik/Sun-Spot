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
        obj.push({
          [key]: key === 'radiant_win' ? el[key].toString() : el[key]
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

    // create related object by hero_id

    return players

  }
};

module.exports = HelpfulUtils;
