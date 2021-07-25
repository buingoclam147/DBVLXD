const express = require('express')
const router = express.Router();

const { getList, getOne, create, deleteMany, update, deleteOne } = require('../controllers/employe.controller');

router.get('/', getList)
router.get('/:id', getOne);
router.post('/', create);
router.post('/delete-many', deleteMany);
router.patch('/:id', update);
router.delete('/:id', deleteOne);
module.exports = router;