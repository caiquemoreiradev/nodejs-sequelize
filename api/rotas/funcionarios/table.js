const model = require('./model');

module.exports = {

    index() {
        return model.findAll();
    },

    create(fornecedor) {
        return model.create(fornecedor);
    },

    async findById(id) {
        const finded = await model.findOne({
            where: {
                id: id
            }
        })

        if(!finded) {
            throw new error("Funcionário não encontrado na base de dados");
        }

        return finded;
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

        const finded = await model.destroy({
            where: {
                id: id
            }
        });

        if(!finded) {
            throw new Error('Funcionário não encontrado na base de dados')
        }

        return finded;
    }
}