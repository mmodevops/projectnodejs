const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'src/public')));


// HTTP logger
app.use(morgan('dev'));

//Template engine
app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));


app.get('/', (req, res) => {
  res.render('home')
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});


