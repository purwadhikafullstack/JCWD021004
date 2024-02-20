import { Model, DataTypes } from 'sequelize';

export default class PictureRoom extends Model {
  static associate(models) {
    // define association here
  }
}

export const init = (sequelize) => {
  PictureRoom.init(
    {
      pictureRoom_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      room_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PictureRoom',
    },
  );
};
