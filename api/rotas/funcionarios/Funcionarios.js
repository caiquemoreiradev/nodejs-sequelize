const tableFunc = require('./table');

class Funcionarios {
    constructor({ id, nameFunc, email, sector, createdAt, updatedAt }) {

        this.id = id;
        this.nameFunc = nameFunc;
        this.email = email;
        this.sector = sector;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create() {

        const result = await tableFunc.create({
            nameFunc: this.nameFunc,
            email: this.email,
            sector: this.sector
        })

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

    async findById() {

        const result = await tableFunc.findById(this.id);

        this.nameFunc = result.nameFunc;
        this.email = result.email;
        this.sector = result.sector;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

    async update() {

        await tableFunc.findById(this.id);

        const fields = [ 'nameFunc', 'email', 'sector' ];
        const dataUpdate = {};

        fields.forEach(field => {

            const value = field;

            if(typeof value === 'string' && value.length > 0) {
                dataUpdate[field] = value; 
            }
        })

        if(Object.keys(dataUpdate).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar o registro');
        }

        await tableFunc.update(this.id, dataUpdate);
    }

    async delete() {
        return tableFunc.delete(this.id);
    }
}

module.exports = Funcionarios;