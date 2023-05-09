const Item = require('../models/Item');


const create = (body) => Item.findOneAndUpdate(body,{$set: {name: body.name}},{upsert: true, returnDocument: true});

const selectAll = () => Item.find().sort({'id': 'asc'})

module.exports = {
    create, selectAll
}