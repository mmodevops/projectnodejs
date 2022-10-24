
const express = require('express');
const path = require('path');
const logger = require('morgan');
const { engine } = require('express-handlebars');




const app = express();


// view engine setup
// Template engine
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/resources/views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'src/public')));



app.get('/', (req, res) => {
  res.render('home');
})




const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});

