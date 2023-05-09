const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(
      "mongodb+srv://thiagoamaror:wmuG01uTVEcYJRag@auctionhouse.0xvg44q.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("Conectado com sucesso"))
    .catch((error) => console.log(error));
};

module.exports = connectDatabase;
