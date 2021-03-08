const Sequelize = require('sequelize');
const instance = require('../../bd');

const columns = {
    nameFunc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sector: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'funcionarios',
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
}

module.exports = instance.define('funcionarios', columns, options);