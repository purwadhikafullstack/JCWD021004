import { Model, DataTypes } from 'sequelize';

export default class PeakSeason extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

export const init = (sequelize) => {
  PeakSeason.init(
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      discount_percentage: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      discount_nominal: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PeakSeason',
    },
  );
};
