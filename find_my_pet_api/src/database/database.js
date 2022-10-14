import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();
export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
});
