import { Model, DataTypes } from 'sequelize';
import User from './users.model';

export default class Roles extends Model {
  static associate(models) {
    Roles.hasMany(models.User, { foreignKey: 'roleId' });
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
