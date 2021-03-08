const routes = require('express').Router({ mergeParams: true });
const tableProd = require('./table');
const Produto = require('./Produto');

routes.get('/', async (req, res) => {

    const products = await tableProd.index(req.params.idFornecedor);

    res.send(
        JSON.stringify(products)
    )
});

routes.post('/', async (req, res, next) => {

    try {
        const idFornecedor = req.params.idFornecedor;
        const body = req.body;
        const data = Object.assign({}, body, { fornecedorReference: idFornecedor });

        const produto = new Produto(data);
        await produto.store(data);

        res.status(201).send(
            JSON.stringify(produto)
        )
    }
    catch (err) {
        res.status(400).send(
            JSON.stringify({
                message: err.message
            })
        )
        next(err);
    }
});

routes.delete('/:id', async (req, res) => {

    const data = {
        id: req.params.id,
        fornecedorReference: req.params.idFornecedor
    }

    const produto = new Produto(data);

    await produto.delete();

    res.status(200).send(
        JSON.stringify({
            message: 'Registro apagado com sucesso'
        })
    );
});

routes.get('/:id', async (req, res) => {

    try {
        const data = {
            id: req.params.id,
            fornecedorReference: req.params.idFornecedor
        }
    
        const produto = new Produto(data);
    
        await produto.findOne();
    
        res.status(200).end();
    }
    catch(err) {
        res.status(400).send(
            JSON.stringify({
                message: 'Registro não encontrado em nossa base de dados',
                error: err.message
            })
        )
    }
})

module.exports = routes;