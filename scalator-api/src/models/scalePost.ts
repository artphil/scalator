import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { v4 as uuidv4 } from "uuid";
import Scale from "./scale";

class ScalePost extends Model {
  public id!: string;
  public scaleId!: string;
  public personId!: string;
  public postId!: string;
  public date!: Date;
}

ScalePost.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    scaleId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    personId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    postId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "ScalePost",
    timestamps: false,
  }
);

export default ScalePost;

Scale.hasMany(ScalePost, {
  foreignKey: "scaleId",
  onDelete: "CASCADE",
  as: "posts",
});

ScalePost.belongsTo(Scale, {
  foreignKey: "scaleId",
  onDelete: "CASCADE",
});
