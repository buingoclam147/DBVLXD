const express = require('express')
const router = express.Router();

const {
    Category
} = require('../models');
router.get('/', (req, res) => {
    Category.find({}).then((c) => {
        res.send(c);
    })
})
router.post('/', (req, res) => {
    let name = req.body.name;
    let note = req.body.note;
    let newCategory = new Category({
        name,
        note
    })
    newCategory.save().then((x) => {
        res.send(x);
    })
});
router.patch('/:id', (req, res) => {
    Category.findOneAndUpdate({
        _id: req.params.id
    }, {
        //$set means check where req.body changes and update there
        $set: req.body
    }).then(x => res.send(x))

});
router.delete('/:id', (req, res) => {
    Category.findOneAndRemove({
        _id: req.params.id
    }).then(x => res.send(x))
})

module.exports = router;