const express = require('express')
const router = express.Router();

    hashCode = function(s){
    return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  }
const {
    EmployeAccount
} = require('../models');

router.get('/', (req, res) => {
    EmployeAccount.find({}).then((c) => {
        res.send(c);
    })
})
router.post('/', (req, res) => {
    let employeId = req.body.employeId;
    let userName = req.body.userName;
    let password = hashCode(req.body.password);

    let newEmployeAccount = new EmployeAccount({
        employeId,userName,password
    })
    newEmployeAccount.save().then((x) => {
        res.send(x);
    })
});
router.patch('/:id', (req, res) => {
    EmployeAccount.findOneAndUpdate({
        _id: req.params.id
    }, {
        //$set means check where req.body changes and update there
        $set: req.body
    }).then(x => res.send(x))

});
router.delete('/:id', (req, res) => {
    EmployeAccount.findOneAndRemove({
        _id: req.params.id
    }).then(x => res.send(x))
})

module.exports = router;