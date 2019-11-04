const express = require('express');
const routes = require('./routes');

const app = express();

//GET, POST, PUT, DELETE

//req.query = acessar query params (para filtros)
//req.params = accesar route params (requisição e delete)
//req.body = acessar corpo da requisição

app.use(express.json());
app.use(routes);

app.listen(3333);