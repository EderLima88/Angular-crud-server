import { Sequelize} from 'sequelize';

const sequelize = new Sequelize('angulardb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
  });

  export default sequelize;