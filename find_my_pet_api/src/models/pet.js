import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Photo } from "./photos.js";
import { Report } from "./report.js";

export const Pet = sequelize.define("pet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  breed: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Pet.hasMany(Photo, {
  foreignKey: "pet_id",
  sourceKey: "id",
  as: "album",
});

Photo.belongsTo(Pet, {
  foreignKey: "pet_id",
  targetKey: "id",
});

Pet.hasOne(Report, {
  foreignKey: "pet_id",
  sourceKey: "id",
});

Report.belongsTo(Pet, {
  foreignKey: "pet_id",
  targetKey: "id",
});
