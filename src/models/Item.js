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
    }
});

const Item = mongoose.model("Item", ItemSchema)

module.exports = Item;