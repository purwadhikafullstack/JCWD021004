import { Model, DataTypes } from 'sequelize';

export default class City extends Model {
  static associate(models) {}
}

export const init = (sequelize) => {
  City.init(
    {
      city_id: {
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
      timestamps: false,
      modelName: 'City',
    },
  );
};
