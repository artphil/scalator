import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { v4 as uuidv4 } from "uuid";

class User extends Model {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;

  toJSON() {
    const attributes = { ...this.get() };
    delete attributes.password;
    return attributes;
  }
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: false,
  }
);

export default User;
