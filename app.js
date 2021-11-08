const express = require('express');
const app = express();
// const port = process.env.PORT;
const port = '3000';
// require to use database 
const mongoose = require('./db/mongoose')

// require to use body 
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var cors = require('cors')

app.use(express.static('./upload'))

const multer = require('multer');


app.use(cors())
// declare all models 
const {
  Category,
  Customer,
  Employe,
  
  Auth
} = require('./models')
//declare route
const categoryRouter = require('./routes/category.route');
const employeRouter = require('./routes/employe.route');
const customerRouter = require('./routes/customer.route');
const authRouter = require('./routes/auth.route');
// create API 
app.use('/api/category', categoryRouter);
app.use('/api/employe', employeRouter);
app.use('/api/customer', customerRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
})