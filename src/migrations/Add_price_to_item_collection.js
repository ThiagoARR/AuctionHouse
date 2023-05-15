const mongoose = require('mongoose');
const Item = require('../models/Item');
const connectDatabase = require("../database/db")

async function updateSellPrice() {
  try {
    connectDatabase()

    const result = await Item.updateMany({}, { 
      $set: { 
        sell_price: {
          gold: '', 
          silver: '', 
          cooper: ''} 
        }
      }
    );
    console.log(result);

    mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.log(err);
    mongoose.connection.close();
    process.exit(1);
  }
}

updateSellPrice();
