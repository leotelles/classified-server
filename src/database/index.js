import Sequelize from 'sequelize';

// importtar todos os models
import Category from '../app/models/Category';
import Adverts from '../app/models/Adverts';

// importar as configurações
import databaseConfig from '../config/database';

// array com todos os models importados
const models = [Category, Adverts];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    // chamar o método init de cada model
    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
