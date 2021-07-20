const { Product } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    req.query.price = [Number(req.query.price.split(',')[0]), Number(req.query.price.split(',')[1])];
    let perPage = Number(req.query.perPage) || 10;
    let page = Number(req.query.page) || 0;
    let searchName = req.query.name ? req.query.name : '';
    let searchPriceMin = req.query.price[0] ? req.query.price[0] : req.query.price[0] = 0;
    let searchPriceMax = req.query.price[1] * 1000 ? req.query.price[1] * 1000 : req.query.price[1] = 9999999;
    let filter = {
        name: { '$regex': `${searchName}` },
        price: { '$gte': `${searchPriceMin}` },
        price: { '$lte': `${searchPriceMax}` }
    }
    req.query.categoryId != "" && req.query.categoryId != "null" ? filter.categoryId = req.query.categoryId : filter;
    req.query.supplierId != "" && req.query.supplierId != "null"? filter.supplierId = req.query.supplierId : filter;
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