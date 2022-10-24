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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('http://localhost:5000s')
});


