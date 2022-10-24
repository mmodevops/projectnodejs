const express = require('express');
const logger = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/public')));


// HTTP logger
app.use(logger('dev'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

// PORT
const PORT = process.env.PORT || 8081;

// Listen on port 8081
app.listen(PORT, () =>
  console.log(`Application is listening on port ${PORT}!`)
);


