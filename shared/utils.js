const getOne = (req, res, schema) => {
    let id = req.params.id;
    schema.findById({
        _id: id
    }).then(item => {
        res.send(item);
    })
}
const create = (req, res, schema) => {
    let data = req.body;
    let newData = new schema(data);
    newData.save().then((x) => {
        res.send(x);
    }).catch(error => {
        res.status(400).send({
            errorCode: 1000,
            error
        })
    })
}
const update = (req, res, schema) => {
    schema.findOneAndUpdate({
        _id: req.params.id
    }, {
        //$set means check where req.body changes and update there
        $set: req.body
    }).then(x => res.send(x)).catch(error => {
        res.status(400).send({
            errorCode: 2000,
            error
        })
    })

}
const deleteOne = (req, res, schema) => {
    schema.findOneAndRemove({
        _id: req.params.id
    }).then(x => res.send(x))
        .catch(error => {
            res.status(400).send({
                errorCode: 3000,
                error
            })
        })
}
const deleteMany = async (req, res, schema) => {
    const arr = req.body;
    let result = [];
    for (let item of arr) {
        try {
            const x = await schema.findByIdAndRemove({ _id: item });
            const success = {
                status: true,
                item: x
            }
            result.push(success);
        } catch (error) {
            const success = {
                status: false,
                item,
                error
            }
            result.push(success);
        }
    }
    res.send(result)

}

module.exports = {
    getOne,
    create,
    deleteMany,
    update,
    deleteOne
}