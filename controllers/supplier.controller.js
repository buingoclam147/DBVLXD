const { Supplier } = require('../models');
const utils = require('../shared/utils');

const getList = (req, res) => {
    const query = req.query;
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let searchName = query.searchName ? query.searchName : '';
    let searchAddress = query.address ? query.address : '';
    Supplier.find({
        name: { '$regex': `${searchName}` },
        address: { '$regex': `${searchAddress}` }
    })
    .limit(perPage)
    .skip(perPage * page).then(x => {
        Supplier.find({
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
    //     Supplier.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })

}
const getOne = (req, res) => {
    utils.getOne(req, res, Supplier);
}
const create = (req, res) => {
    utils.create(req, res, Supplier);
}
const deleteMany = async (req, res) => {
 await   utils.deleteMany(req, res, Supplier);
}
const update = (req, res) => {
    utils.update(req, res, Supplier);
}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Supplier);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}