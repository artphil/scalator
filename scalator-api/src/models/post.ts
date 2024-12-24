import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import { v4 as uuidv4 } from "uuid";

class Post extends Model {
  public id!: string;
  public name!: string;
}

Post.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: uuidv4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Post",
    timestamps: false,
  }
);

export default Post;
