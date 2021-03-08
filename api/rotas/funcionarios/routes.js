const router = require('express').Router();
const table = require('./table');
const Funcionario = require('./Funcionarios');

//Listar fornecedores

router.get('/', async (req, res) => {

    const results = await table.index();
    res.status(200).send(
        JSON.stringify(results)
    );
});

//Criar um funcionario

router.post('/', async (req, res) => {
        try {
            const results = req.body;

            const funcionario = new Funcionario(results);

            await funcionario.create();

            res.status(201).send(
                JSON.stringify(funcionario)
            )
        }

        catch (err) {
            res.status(500).send(
                JSON.stringify({
                    message: 'Não foi possível inserir o funcionário em nosso banco',
                    error: err.message
                })
            )
        }

});

//Encontrar um funcionário pelo seu id

router.get('/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const funcionario = new Funcionario({ id: id });

        await funcionario.findById();

        res.status(201).send(
            JSON.stringify(funcionario)
        )
    }

    catch(err) {
        res.status(400).send(
            JSON.stringify({
                message: `Não foi possível encontrar o funcionário com o id especificado`,
                error: err.message
            })
        )
    }
});

//Atualizar um registro de Funcionário

router.put('/:id', async (req, res) => {

    try {

        const { id } = req.params;
        const dataReceive = req.body;

        const results = Object.assign({}, dataReceive, { id: id });
        const funcionario = new Funcionario(results);

        await funcionario.update();

        res.status(200).send(
            JSON.stringify({
                message: 'Registro atualizado com sucesso',
                data: funcionario
            })
        )
    }

    catch(err) {
        res.status(400).send(
            JSON.stringify({
                message: 'Não foi possível atualizar o registro',
                error: err.message
            })
        )
    }
});

//Deletar os registros de um funcionário

router.delete('/:id', async (req, res) => {

    try {

        const { id } = req.params;

        const funcionario = new Funcionario({ id: id });

        await funcionario.delete();

        res.status(200).send(
            JSON.stringify({
                message: 'Registro do funcionário deletado com sucesso',
            })
        )
    }

    catch (err) {
        res.status(400).send(
            JSON.stringify({
                message: 'Não foi possível deletar o registro do funcionário',
                error: err.message
            })
        )
    }
});

module.exports = router;