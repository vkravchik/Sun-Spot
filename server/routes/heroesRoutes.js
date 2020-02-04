const HeroesUtils = require("../utils/heroesUtils");

const router = require('express').Router();
const _ = require('lodash');
const heroesList = require('../dataset/heroes');

router.get('/', (req, res) => {
  res.send(heroesList);
});

router.get('/attack_type', (req, res) => {
  res.send(HeroesUtils.calculateHeroesByAttackType(heroesList));
});

router.get('/primary_attr', (req, res) => {
  res.send(HeroesUtils.calculateHeroesByPrimaryAttr(heroesList));
});

module.exports = router;
