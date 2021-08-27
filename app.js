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

var cors = require('cors')

app.use(express.static('./upload'))

const multer = require('multer');


app.use(cors())
// declare all models 
const {
  Category,
  Customer,
  Employe,
  InvoiceDetail,
  Invoice,
  Product,
  Supplier,
  Auth
} = require('./models')
//declare route
const supplierRouter = require('./routes/supplier.route');
const categoryRouter = require('./routes/category.route');
const employeRouter = require('./routes/employe.route');
const productRouter = require('./routes/product.route');
const customerRouter = require('./routes/customer.route');
const authRouter = require('./routes/auth.route');
const invoiceRouter = require('./routes/invoice.route');
const invoiceDetailRouter = require('./routes/invoice-detail.route');
// create API 
app.use('/api/supplier', supplierRouter);
app.use('/api/category', categoryRouter);
app.use('/api/employe', employeRouter);
app.use('/api/product', productRouter);
app.use('/api/customer', customerRouter);
app.use('/api/auth', authRouter);
app.use('/api/invoice', invoiceRouter);
app.use('/api/invoice-detail', invoiceDetailRouter);


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + file.originalname)
  }
});

var upload = multer({ storage: storage });
app.post('/upload', upload.single('file'), function (req, res) {
  console.log(req.file);
  res.send(req.file);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})