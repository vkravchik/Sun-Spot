const _ = require('lodash');

const HelpfulUtils = {
  transformSecondsToMinutes: (seconds) => Number((seconds / 60).toFixed(1)),

  modifyDataForPieChartFormat: (data) => {
    return _.map(data, (el, key) => ({
      name: key,
      y: el
    }))
  }
};

module.exports = HelpfulUtils;
