import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const createDatabase = () => {
  // create db if it doesn't already exist
  try {
    const client = new pg.Client({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: "postgres",
    });

    client.connect();
    client.query(`CREATE DATABASE ${process.env.DATABASE_NAME}`, (err, res) => {
      if (err) {
        console.log("Database already exists!");
      }
      if (res) {
        console.log("Database created successfully");
      }
      client.end();
    });
  } catch (e) {
    console.log(e.message);
  }
};

createDatabase();
