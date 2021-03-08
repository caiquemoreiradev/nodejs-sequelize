const Model = require('../distribuidores/model');

module.exports = {
    index() {
        return Model.findAll();
    }
}