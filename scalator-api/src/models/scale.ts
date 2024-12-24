import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { v4 as uuidv4 } from "uuid";

class Scale extends Model {
  public id!: string;
  public name!: string;
  public title!: string;
  public init!: Date;
  public end!: Date;
}

Scale.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    init: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    end: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Scale",
    timestamps: false,
  }
);

export default Scale;
