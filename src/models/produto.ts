import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Produto = db.define('Produto', {
    nome: { //foi digitado errado, ficou 'nome' no banco ao invés de 'name'
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.DOUBLE
    },
    stock: {
        type: DataTypes.NUMBER
    }

}, {
    createdAt: false,
    updatedAt: false
});

export default Produto;