const { Invoice } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    const query = req.query;
    let filter = {}
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    if (query.customerId) filter.customerId = query.customerId;
    if (query.code) filter.code = { $regex: query.code };
    Invoice.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Invoice.find(filter).count().then(count => {
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
    //     Employe.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })
}
const getOne = (req, res) => {
    utils.getOne(req, res, Invoice);
}
const create = (req, res) => {
    utils.create(req, res, Invoice);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Invoice);
}
const update = (req, res) => {
    utils.update(req, res, Invoice);
}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Invoice);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}