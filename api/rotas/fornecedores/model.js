const Sequelize = require('sequelize');
const instance = require('../../bd');

const columns = {
    nameET: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
}

module.exports = instance.define('fornecedor', columns, options);