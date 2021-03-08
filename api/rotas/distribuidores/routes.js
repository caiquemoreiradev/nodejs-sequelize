const routes = require('express').Router();
const tableDist = require('../distribuidores/table');

routes.get('/', (req, res) => {

    const distribuidores = tableDist.index();

    res.send(
        JSON.stringify(distribuidores)
    )
})

module.exports = routes; 
