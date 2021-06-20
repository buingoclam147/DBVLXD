const express = require('express');
const app = express();
const port = 3000;
// require to use database 
const mongoose = require('./db/mongoose')

// require to use body 
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// load in the mongoose models
const {
  Category,
  Customer,
  CustomerAccount,
  Employe,
  EmployeAccount,
  InvoiceDetail,
  Invoice,
  Product,
  Supplier
} = require('./models')
 
const categoryRouter = require('./routes/category.route')


app.use('/api/category', categoryRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})