const utils = require('../shared/utils');
const { Employe } = require('../models');

const login = (req, res) => {
    account = req.body;
    Employe.find(account).then(x => {
            data = x[0];
            delete data._doc.password;
            res.send(data);
    }).catch(error => {
        res.status(400).send({
            errorCode: 2000,
            error
        })
    })
}
module.exports = {
    login
}