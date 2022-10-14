import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Pet } from "./pet.js";
import { Position } from "./position.js";

export const Report = sequelize.define("report", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  last_seen: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  report_message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Report.hasOne(Position, {
  foreignKey: "report_id",
  sourceKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

Position.belongsTo(Report, {
  foreignKey: "report_id",
  targetKey: "id",
});
