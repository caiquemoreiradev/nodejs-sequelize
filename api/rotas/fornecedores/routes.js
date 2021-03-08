const router = require('express').Router();
const table = require('./table');
const Fornecedor = require('./Fornecedores');

//Listar fornecedores

router.get('/', async (req, res) => {

    const results = await table.index();
    res.status(200).send(
        JSON.stringify(results)
    );
})

//Criar fornecedores

router.post('/', async (req, res) => {
   try {
    const resultsReceive = req.body;

    const fornecedor = new Fornecedor(resultsReceive);

    await fornecedor.create();
    res.status(201).send(
        JSON.stringify(fornecedor)
    )
   }

   catch (error) {
       res.status(400).send(
           JSON.stringify({
               message: error.message
           })
       )
   }
})

//Encontrar um fornecedor especifico pelo id

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const fornecedor = new Fornecedor({ id: id });

        await fornecedor.loadOne();
        res.status(201).send(
            JSON.stringify(fornecedor)
        )
    }
    catch (error) {
        console.log(error);

        res.status(404).send(
            JSON.stringify({
                ERROR: error.message
            })
        );
    }
})

//Atualizando um fornecedor

router.put('/:id', async (req, res) => {

    try {
        const { id } = req.params;

        const resultsReceive = req.body;
        const result = Object.assign({}, resultsReceive, { id: id });
        const fornecedor = new Fornecedor(result);

        await fornecedor.update();

        res.status(200).send(
            JSON.stringify({
                registro: fornecedor,
                message: "Registro atualizado com sucesso"
            })
        )
    }
    catch (error) {
        console.log(error);

        res.status(404).send(
            JSON.stringify({
                ERROR: error.message
            })
        )
    }
})

//Deletando um fornecedor 

router.delete('/:id', async (req, res) => {

    try {
        const { id } = req.params;

        const fornecedor = new Fornecedor({ id: id });

        await fornecedor.delete();
        res.send(
            JSON.stringify({
                fornecedor,
                message: 'Fornecedor deletado com sucesso'
            })
        )
    }
    catch (error) {
        console.log(error);

        res.send(
            JSON.stringify({
                ERROR: error.message
            })
        )
    }
})

module.exports = router;

