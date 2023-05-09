const express = require("express")
const app = express();
const connectDatabase = require("../database/db")
const itemRoute = require("../routes/item.route")

const port = 3000

connectDatabase()
app.use(express.json());
app.use("/item", itemRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
