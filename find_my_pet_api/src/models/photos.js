import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Photo = sequelize.define("photo", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  img_url: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
    allowNull: false,
  },
});
