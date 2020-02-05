const HeroesUtils = require("../utils/heroesUtils");

const router = require('express').Router();
const _ = require('lodash');
const heroesList = require('../dataset/heroes');

router.get('/', (req, res) => {
  res.send(heroesList);
});

router.get('/attack_type', (req, res) => {
  res.send(
    HeroesUtils.modifyDataForPieChartFormat(
      HeroesUtils.calculateHeroesByAttackType(heroesList)
    )
  )
});

router.get('/primary_attr', (req, res) => {
  res.send(
    HeroesUtils.modifyDataForPieChartFormat(
      HeroesUtils.calculateHeroesByPrimaryAttr(heroesList)
    )
  )
});

router.get('/filter_by_roles', (req, res) => {
  res.send(HeroesUtils.filteringByRoles(heroesList, null));
});

module.exports = router;
