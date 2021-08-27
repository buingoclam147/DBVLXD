const { Invoice } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    const query = req.query;
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let searchName = query.searchName ? query.searchName : '';
    let searchAddress = query.address ? query.address : '';
    Invoice.find({
        name: { '$regex': `${searchName}` },
        address: { '$regex': `${searchAddress}` }
    })
    .limit(perPage)
    .skip(perPage * page).then(x => {
        Invoice.find({
            name: { '$regex': `${searchName}` },
            address: { '$regex': `${searchAddress}` }
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
    //     Invoice.count().exec(function(err, count) {
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
 await   utils.deleteMany(req, res, Invoice);
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