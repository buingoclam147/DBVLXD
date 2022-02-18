const { Employe } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    const query = req.query;
    let perPage = Number(query.perPage) || 10;
    let page = Number(query.page) || 0;
    let fullName = query.fullName ? query.fullName : '';
    let address = query.address ? query.address : '';
    let filter = {
        fullName: { $regex: fullName },
        address: { $regex: address },
    }
    query.sex && query.sex != "null" ? filter.sex = query.sex : filter;
    Employe.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            Employe.find(filter).count().then(count => {
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
    utils.getOne(req, res, Employe);
}
const create = (req, res) => {
    userName = { userName: req.body.userName };
    Employe.find(userName).then(x => {
        if (x[0] !== undefined) {
            res.status(400).send({
                errorCode: 2001,
            })
        }
        else {
            utils.create(req, res, User);
        }
    }).catch(i => {
        res.status(400).send({
            errorCode: 2000,
        })
    })
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, Employe);
}
const update = (req, res) => {
    utils.update(req, res, Employe);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, Employe);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}