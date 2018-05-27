const
  model = require('../models/burger'),
  routes = require('express').Router();

routes.get('/', (req, res) => {
  model.getBurgers()
    .then(data => res.render('index', {data}));
});

module.exports = routes;
