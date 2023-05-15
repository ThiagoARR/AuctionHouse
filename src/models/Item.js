const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    media: {
        type: String
    },
    sell_price: {
        gold: {
            type: Number
        },
        silver: {
            type: Number
        },
        cooper: {
            type: Number
        }
    }
});

const Item = mongoose.model("Item", ItemSchema)

module.exports = Item;