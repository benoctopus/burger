const
  express = require('express'),
  app = express(),
  parser = require('body-parser'),
  path = require('path'),
  routes = require('./controllers/burgers_controller'),
  hbs = require('express-handlebars');

app.engine('hbs', hbs);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/views'));

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static('app/client/public'));

app.use(routes);

app.listen(process.env.PORT || 8000,
  () => console.log(`https://localhost:8000`));
