const express = require('express')
const router = express.Router();

const {
    Employe
} = require('../models');

router.get('/', (req, res) => {
    Employe.find({}).then((c) => {
        res.send(c);
    })
})

router.post('/', (req, res) => {
    let fullName = req.body.fullName;
    let phoneNumber = req.body.phoneNumber;
    let sex = req.body.sex;
    let dayOfBirt = new Date(req.body.dayOfBirt).getTime();
    let address = req.body.address;
    let note = req.body.note;
    let newEmploye = new Employe({
        fullName, phoneNumber, sex, dayOfBirt, address,note
    })
    newEmploye.save().then((x) => {
        res.send(x);
    })
});
router.patch('/:id', (req, res) => {
    Employe.findOneAndUpdate({
        _id: req.params.id
    }, {
        //$set means check where req.body changes and update there
        $set: req.body
    }).then(x => res.send(x))

});
router.delete('/:id', (req, res) => {
    Employe.findOneAndRemove({
        _id: req.params.id
    }).then(x => res.send(x))
})

module.exports = router;