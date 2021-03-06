const
  express = require('express'),
  app = express(),
  parser = require('body-parser'),
  path = require('path'),
  routes = require('./controllers/burgers_controller'),
  exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '/views'));

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());
app.use(express.static(path.join('public')));

app.use(routes);

app.listen(process.env.PORT || 8080,
  () => console.log(`localhost:8080`));
