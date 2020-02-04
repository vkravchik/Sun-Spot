const _ = require('lodash');

const HeroesUtils = {
  calculateHeroesByAttackType: (data) => {

    // If true - this is melee heroes if false - this is ranged heroes
    const countedHeroes = _.countBy(data, (el) => el.attack_type === 'Melee');

    return {
      melee: countedHeroes.true,
      ranged: countedHeroes.false
    }
  },

  calculateHeroesByPrimaryAttr: (data) => {
    const countedHeroes = _.countBy(data, (el) => el.primary_attr);

    return countedHeroes;
  }
};

module.exports = HeroesUtils;
