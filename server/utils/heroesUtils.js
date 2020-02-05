const HeroesConstants = require("../common/constants/heroesConstants");

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
    return _.countBy(data, (el) => el.primary_attr);
  },

  filteringByRoles: (data, roles) => {
    roles = [HeroesConstants.CARRY];
    return _.filter(data, (hero) => hero.roles.some(heroRole => roles.every(role => role === heroRole)));
  },
};

module.exports = HeroesUtils;
