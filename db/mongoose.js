const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://buingoclam147:Aa01632995337@cluster0.pbwlc.mongodb.net/VLXD?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log("connect database")
});

module.exports = mongoose