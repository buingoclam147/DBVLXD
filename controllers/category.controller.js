
const { Category } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    let perPage = Number(req.query.perPage) || 10;
    let page = Number(req.query.page) || 0;
    let searchName = req.query.searchName ? req.query.searchName : '';
    Category.find({
        name: { '$regex': `${searchName}` }
    })
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Category.find({
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
    //     Category.count().exec(function(err, count) {
    //         res.render('events', {
    //             events: events,
    //             page: page,
    //             pages: count / perPage
    //         })
    //     })
    // })

}


const getOne = (req, res) => {
    utils.getOne(req, res, Category);
}
const create = (req, res) => {
    utils.create(req, res, Category);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Category);
}
const update = (req, res) => {
    utils.update(req, res, Category);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Category);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}