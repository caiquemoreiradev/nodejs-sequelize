const tableProd = require('../produtos/table');

class Produto {
    constructor ({ id, nameProd, precoProd, categoryProd, estoqueProd, fornecedorReference, createdAt, updatedAt, versao }) {

        this.id = id;
        this.nameProd = nameProd;
        this.precoProd = precoProd;
        this.categoryProd = categoryProd;
        this.estoqueProd = estoqueProd;
        this.fornecedorReference = fornecedorReference;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.versao = versao;
    }

    validation() {
        
        if(typeof this.nameProd !== 'string' || this.nameProd.length === 0) {
            throw new Error('O campo "nameProd" está inválido')
        }

        if(typeof this.precoProd !== 'number' || this.precoProd === 0) {
            throw new Error('O campo "precoProd" está inválido')
        }

        if(typeof this.categoryProd !== 'string' || this.categoryProd.length === 0) {
            throw new Error('O campo "categoryProd" está inválido')
        }

        if(typeof this.estoqueProd !== 'number' || this.estoqueProd === 0) {
            throw new Error('O campo "estoqueProd" está inválido')
        }
    }

    async store() {

        this.validation();

        const result = await tableProd.store({
            nameProd: this.nameProd,
            precoProd: this.precoProd,
            categoryProd: this.categoryProd,
            estoqueProd: this.estoqueProd,
            fornecedorReference: this.fornecedorReference
        })

        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
        this.versao = result.versao;
    }

    delete() {
        return tableProd.delete(this.id, this.fornecedorReference);
    }

    findOne() {
        const produto = tableProd.findOne(this.id, this.fornecedorReference);

        this.nameProd = produto.nameProd;
        this.precoProd = produto.precoProd;
        this.estoqueProd = produto.estoqueProd;
        this.createdAt = produto.createdAt;
        this.updatedAt = produto.updatedAt;
        this.versao = produto.versao;
    }
}

module.exports = Produto;