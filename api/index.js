const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const routerFornecedores = require('./rotas/fornecedores/routes');
const routerFuncs = require('./rotas/funcionarios/routes');
const routerProd = require('./rotas/produtos/routes');
const routerDist = require('./rotas/distribuidores/routes');

app.use('/api/fornecedores', routerFornecedores);

app.use('/api/funcionarios', routerFuncs);

app.use('/api/:idFornecedor/produtos', routerProd);

app.use('/api/distribuidores/', routerDist);

app.listen(config.get('api.port'), () => console.log('A aplicação está rodando na porta 3000!!'));