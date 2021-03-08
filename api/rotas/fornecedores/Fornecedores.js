const tabelaFornecedor = require('./table');

class Fornecedor {
    constructor({ id, nameET, email, category, createdAt, updatedAt }) {
        this.id = id;
        this.nameET = nameET;
        this.email = email;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    async create() {

        this.validateField();

        const result = await tabelaFornecedor.create({
            nameET: this.nameET,
            email: this.email,
            category: this.category
        })

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
    }

    async loadOne() {
        const find = await tabelaFornecedor.findById(this.id);

        this.nameET = find.nameET;
        this.email = find.email;
        this.category = find.category
        this.createdAt = find.createdAt;
        this.updatedAt = find.updatedAt;
    }

    async update() {
        await tabelaFornecedor.findById(this.id);

        const fields = ['nameET', 'email', 'category'];
        const dataUpdate = {};

        fields.forEach((field) => {
            const value = this[field];

            if (typeof value === 'string' && value.length > 0) {
                dataUpdate[field] = value;
            }
        })

        if (Object.keys(dataUpdate).length === 0) {
            throw new Error('Não foram fornecidos dados para atualizar');
        }

        await tabelaFornecedor.update(this.id, dataUpdate);
    }

    async delete() {
        return tabelaFornecedor.delete(this.id);
    }

    validateField() {
        const fields = [ 'nameET', 'email', 'category' ];

        fields.forEach(field => {
            const value = this[field];

            if(typeof value != 'string') {
                throw new Error(`O valor do campo '${field}' não está sendo inserido com um tipo válido`)
            } 
            else if (value.length === 0) {
                throw new Error(`O campo '${field}' está vazio`)
            }
        })
    }
}

module.exports = Fornecedor;