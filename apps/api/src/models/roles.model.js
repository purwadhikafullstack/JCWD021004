import { Model, DataTypes } from 'sequelize';

export default class Roles extends Model {
  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'role_id' });
  }
}

export const init = (sequelize) => {
  Roles.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Roles',
    },
  );
};
