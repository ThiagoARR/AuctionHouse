const Item = require('../models/Item');


const updateOrCreate = (body) => Item.findOneAndUpdate(body,{$set: {name: body.name}},{upsert: true, returnDocument: true});

const updateOrCreateMedia = (body) => Item.findOneAndUpdate({id: body.id},{$set: {media: body.media}},{upsert: true, returnDocument: true});

const selectAllLimit = () => Item.find().sort({'id': 'asc'}).limit(100)

const selectAll = () => Item.find()

const selectPart = (start, end) => Item.find({media: ''}).skip(start).limit(end)

module.exports = {
    updateOrCreate, updateOrCreateMedia, selectAll, selectAllLimit, selectPart
}