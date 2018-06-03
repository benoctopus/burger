const
  model = require('../models/burger'),
  routes = require('express').Router();

routes.get('/', (req, res) => {
  model.getBurgers().then(data => {
    console.log(data);
    res.render('index', {data})
  })
});

routes.post('/dev', (req, res) => {
  console.log(req.body);
  res.send(model.devour(req.body.id))
});

routes.post('/create', (req, res) => {
  console.log(req.body);
  res.send(model.newBurger(req.body.name))
});

module.exports = routes;
