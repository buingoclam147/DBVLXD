const { Product } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    const filter = {};
    const query = { ...req.query };
    query.price = query.price ? query.price : '0,9999999999999999';
    query.price = query.price.split(',').map(x => Number(x));

    const perPage = Number(query.perPage) || 10;
    const page = Number(query.page) || 0;
    if (query.name) filter.name = { $regex: query.name };
    if (query.price) filter.price = { $gte: query.price[0], $lte: query.price[1] }
    if (query.categoryId) filter.categoryId = query.categoryId;
    if (query.supplierId) filter.supplierId = query.supplierId;

    Product.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Product.find(filter).count().then(count => {
                res.send({
                    total: count,
                    data: x
                })
            })
        })

    // .sort({
    //     name: 'asc'
    // })
    // .exec(function(err, events) {
    //     Product.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })

}

const getOne = (req, res) => {
    utils.getOne(req, res, Product);
}
const create = (req, res) => {
    utils.create(req, res, Product);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Product);
}
const update = (req, res) => {
    utils.update(req, res, Product);
}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Product);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}