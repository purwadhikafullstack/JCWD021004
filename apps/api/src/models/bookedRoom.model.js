import { Model, DataTypes } from 'sequelize';

export default class BookedRoom extends Model {
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
  BookedRoom.init(
    {
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      is_complete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, 
      },
    },
    {
      sequelize,
      modelName: 'BookedRoom', 
    },
  );
};
