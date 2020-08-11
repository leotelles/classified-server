import Sequelize, { Model } from 'sequelize';

class Adverts extends Model {
  static init(sequelize) {
    super.init(
      {
        category: Sequelize.INTEGER,
        title: Sequelize.STRING,
        generalInfo: Sequelize.STRING,
        description: Sequelize.STRING,
        price: Sequelize.DECIMAL(10, 2),
        location: Sequelize.STRING,
        condition: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: 'category',
      as: 'ad_category',
    });
  }
}

export default Adverts;
