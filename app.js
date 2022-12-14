
const express = require('express');
const path = require('path');
const logger = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const methodOverride = require('method-override');
const route = require('./src/routes/index');
const db = require('./src/config/db/index');
// db.connect();

var mongoose = require('mongoose')
var url =
    'mongodb+srv://namanh:12345abc@sandbox.yaprtgs.mongodb.net/asm2'

mongoose.connect(url, { useNewUrlParser: true }, err => {
    if (!err) {
        console.log('DB connect succeed !')
    } else {
        console.error(err)
    }
})


// view engine setup
// Template engine
app.engine('hbs', engine({
  extname:'.hbs',
  helpers: {
    sum: (a,b) => a +b,
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src','resources','views'));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'src/public')));
app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.use(methodOverride('_method'));

route(app);

const port = process.env.PORT || 3131;

app.listen(port, () => {
  console.log("Server is running http://localhost:3000");
});

