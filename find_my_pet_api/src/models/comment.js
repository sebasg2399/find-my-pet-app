
import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Comment = sequelize.define("comment", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

