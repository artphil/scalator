import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { v4 as uuidv4 } from "uuid";

import Scale from "./scale";
import Person from "./person";
import Post from "./post";

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
    modelName: "scale-post",
    timestamps: false,
  }
);

Scale.hasMany(ScalePost, {
  foreignKey: "scaleId",
  onDelete: "CASCADE",
  as: "posts",
});

ScalePost.belongsTo(Scale, {
  foreignKey: "scaleId",
  onDelete: "CASCADE",
});

ScalePost.hasOne(Person, { foreignKey: "personId" });

ScalePost.hasOne(Post, { foreignKey: "postId" });

export default ScalePost;
