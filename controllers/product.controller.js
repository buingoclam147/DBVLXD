const { Product } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    let perPage = Number(req.query.perPage) || 10;
    let page = Number(req.query.page) || 0;
    let searchCategoryId = req.query.categoryId ? req.query.categoryId : '';
    let searchSupplierId = req.query.supplierId ? req.query.supplierId : '';
    let searchName = req.query.name ? req.query.name : '';
    let searchPriceMin = req.query.price[0] ? req.query.price[0] : req.query.price[0] = 0;
    let searchPriceMax = req.query.price[1]? req.query.price[1]: req.query.price[1]=99999999;
    Product.find({
        categoryId: {searchCategoryId},
        supplierId: {searchSupplierId},
        name: { '$regex': `${searchName}` },
        prive: {'$gte':  `${searchPriceMin}`},
        prive: {'$$lte':  `${searchPriceMax}`}
    })
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Product.find({
                name: { '$regex': `${searchName}` }
            }).count().then(count => {
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