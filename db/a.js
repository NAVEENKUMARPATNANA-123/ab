import { Sequelize } from "sequelize";
import express from "express";

const app = express();

const db = new Sequelize("users", "root", "softsuave", {
  host: "localhost",
  dialect: "mysql",
});


  try {
    await db.authenticate();
    console.log("DB Connected");
    const [results] = await db.query("SELECT * FROM Students");
    console.log(results);
  } catch (err) {
    console.error(err);
  }

