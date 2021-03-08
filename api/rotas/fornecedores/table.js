const model = require('./model');

module.exports = {

    index() {
        return model.findAll();
    },

    create(fornecedor) {
        return model.create(fornecedor);
    },

    async findById(id) {
        const find = await model.findOne({
            where: {
                id: id
            }
        })

        if(!find) {
            throw new Error('Fornecedor não encontrado na base de dados');
        }

        return find;
    },

    update(id, dataUpdate) {
        return model.update(
            dataUpdate,
            {
                where: { id: id }
            }
        )
    },

    async delete(id) {
        const find = await model.destroy({
            where: {
                id: id
            }
        })

        if(!find) {
            throw new Error('Fornecedor não encontrado na base de dados');
        }

        return find;
    }
}