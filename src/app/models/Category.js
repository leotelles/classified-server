import Sequelize, { Model } from 'sequelize';

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        level: Sequelize.INTEGER,
        mother: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Category, { foreignKey: 'mother', as: 'main' });
  }
}

export default Category;
