const models = [
    require('../rotas/fornecedores/model'),
    require('../rotas/funcionarios/model'),
    require('../rotas/distribuidores/model'),
    require('../rotas/produtos/model')
];

async function createTables() {
    for(let counter = 0; counter < models.length; counter++) {
        const model = models[counter];

        await model.sync();
    }
}

createTables();