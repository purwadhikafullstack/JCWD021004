import { Model, DataTypes } from 'sequelize';

export default class PictureProperty extends Model {
  static associate(models) {
    // define association here
  }
}

export const init = (sequelize) => {
  PictureProperty.init(
    {
      pictureProperty_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      picture: {
        type: DataTypes.STRING, // adjust the data type based on your requirements
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'PictureProperty',
    },
  );
};
