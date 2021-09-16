const { InvoiceDetail } = require('../models');
const utils = require('../shared/utils');

var getList = (req, res) => {
    const query = req.query;
    let filter = {}
    let perPage = Number(query.perPage) || 25;
    let page = Number(query.page) || 0;
    if (query.invoiceId) filter.invoiceId = query.invoiceId;
    InvoiceDetail.find(filter)
        .limit(perPage)
        .skip(perPage * page).then(x => {
            InvoiceDetail.find(filter).count().then(count => {
                res.send({
                    total: count,
                    data: x
                })
            })
        })
}


const getOne = (req, res) => {
    utils.getOne(req, res, InvoiceDetail);
}
const create = (req, res) => {
    utils.create(req, res, InvoiceDetail);
}
const deleteMany = async (req, res) => {
    await utils.deleteMany(req, res, InvoiceDetail);
}
const update = (req, res) => {
    utils.update(req, res, InvoiceDetail);

}
const deleteOne = (req, res) => {
    utils.deleteOne(req, res, InvoiceDetail);
}
module.exports = {
    getList,
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}