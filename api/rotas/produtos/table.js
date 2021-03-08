const Model = require('../produtos/model');

module.exports = {
    index(idFornecedor) {
        return Model.findAll({
            where: {
                fornecedorReference: idFornecedor
            }
        })
    },

    store(data) {
        return Model.create(data);
    },

    async delete(idProd, idFornecedor) {
        const find = await Model.destroy({
            where: {
                id: idProd,
                fornecedorReference: idFornecedor
            }
        })

        if(!find) {
            throw new Error('Produto não encontrado na base de dados');
        }

        return find;
    },

    async findOne(idProd, idFornecedor) {
        const finded = await Model.findOne({
            where: {
                id: idProd,
                fornecedorReference: idFornecedor
            }
        })

        if(!finded) {
            throw new Error('Produto não encontrado na base de dados');
        }

        return finded;
    }
}