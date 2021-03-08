const Sequelize = require('sequelize');
const instance = require('../../bd/index');

const columns = {
    nameDist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailDist: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contact: {
        type: Sequelize.STRING,
        allowNull: false
    },
    segment: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

const options = {
    freezeTableName: true,
    tableName: 'distribuidores',
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
}

module.exports = instance.define('distribuidores', columns, options);
