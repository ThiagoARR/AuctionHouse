const Item = require('../models/Item');


const updateOrCreate = (body) => Item.findOneAndUpdate(
    {
        id: body.id
    },
    {
        $set: {
            sell_price: {
                gold: body.gold,
                silver: body.silver,
                cooper: body.cooper
            }
        }
    },{upsert: true, returnDocument: true});

const updateOrCreateMedia = (body) => Item.findOneAndUpdate({id: body.id},{$set: {media: body.media}},{upsert: true, returnDocument: true});

const selectAllLimit = () => Item.find().sort({'sell_price': 'desc'}).limit(100)

const selectAll = () => Item.find({media: ''})

const selectPart = (start, end) => Item.find({media: ''}).skip(start).limit(end)

module.exports = {
    updateOrCreate, updateOrCreateMedia, selectAll, selectAllLimit, selectPart
}