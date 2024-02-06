import { Model, DataTypes } from 'sequelize';

export default class PropertyCategory extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    this.hasMany(models.Property, { foreignKey: 'property_id' });
  }
}

export const init = (sequelize) => {
  PropertyCategory.init(
    {
      category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: 'PropertyCategory',
    },
  );
};
