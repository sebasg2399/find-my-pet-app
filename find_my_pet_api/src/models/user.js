import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Comment } from "./comment.js";
import { Pet } from "./pet.js";
import { Report } from "./report.js";

export const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
    unique: {
      args: true,
      msg: "Email address already in use!",
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  identification: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: "This dni is already in use!",
    },
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.hasMany(Pet, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "pets",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

User.hasMany(Report, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "reports",
});

Report.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  sourceKey: "id",
  as: "comments",
});
Comment.belongsTo(User, {
  foreignKey: "user_id",
  targetKey: "id",
});

Report.hasMany(Comment, {
  foreignKey: "report_id",
  sourceKey: "id",
  as: "comments",
});
Comment.belongsTo(Report, {
  foreignKey: "report_id",
  targetKey: "id",
});

// User.belongsToMany(Report, {
//   through: Comment,
//   as: "report_comment",
//   foreignKey: "user_id",
//   // sourceKey: "user_id",
// });
// Report.belongsToMany(User, {
//   through: Comment,
//   as: "user_comment",
//   foreignKey: "report_id",
//   // sourceKey: "report_id",
// });
