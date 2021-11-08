const express = require('express')
const router = express.Router();
const {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
} = require('../controllers/supplier.controller')

router.get('/:id', getOne);
router.get('/', getList)
router.post('/', create);
router.delete('/:id', deleteOne);
router.patch('/:id', update);
router.post('/delete-many', deleteMany);


module.exports = router;