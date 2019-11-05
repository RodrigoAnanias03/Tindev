const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const routes = require('./routes');

const app = express();

mongoose.connect("mongodb+srv://tindev:tindev@tindev-ztxdm.mongodb.net/tindev?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = acessar query params (para filtros)
//req.params = accesar route params (requisição e delete)
//req.body = acessar corpo da requisição

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);