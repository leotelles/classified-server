import Sequelize from 'sequelize';

// importtar todos os models
// import User from '../app/models/User';

// importar as configurações
import databaseConfig from '../config/database';

// array com todos os models importados
const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // chamar o método init de cada model
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
