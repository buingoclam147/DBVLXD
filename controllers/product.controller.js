const { Product } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    const query = req.query;
    query.price = [Number(query.price.split(',')[0]), Number(query.price.split(',')[1])];
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let searchName = query.name ? query.name : '';
    let searchPriceMin = query.price[0] * 1 ? query.price[0] * 1 : query.price[0] = 0;
    let searchPriceMax = query.price[1] * 1 ? query.price[1] * 1 : query.price[1] = 9999999;
    let filter = {
        name: { $regex: searchName },
        price: { $gte: searchPriceMin, $lte: searchPriceMax }

    }
    query.categoryId != "" && query.categoryId != "null" ? filter.categoryId = query.categoryId : filter;
    query.supplierId != "" && query.supplierId != "null" ? filter.supplierId = query.supplierId : filter;
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