const Sequelize = require('sequelize');
const instance = require('../../bd/index');

const columns = {
    nameProd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precoProd: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    categoryProd: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estoqueProd: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fornecedorReference: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: require('../fornecedores/model'),
            key: 'id'
        }
    }
}

const options = {
    freezeTableName: true,
    tableName: 'produtos',
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    version: 'versao'
}

module.exports = instance.define('produtos', columns, options);
