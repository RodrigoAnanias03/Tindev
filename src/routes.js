const express = require('express');

const routes = express.Router();


routes.post('/users/:id', (req, res) => {
    return res.json(req.body);
});

module.exports = routes
