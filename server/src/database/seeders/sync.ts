export { };

import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import db from "../models/db";

dotenv.config();

async function syncDatabase() {
  if (db.sequelize) {
    await db.sequelize.sync({ force: true });
    console.log('Database synced successfully.');
  } else {
    console.error('Sequelize instance is not defined');
  }
}

// Optionally, you can create some initial data here
async function initializeDatabase() {
  await db.User?.create({
    username: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    age: 30,
    gender: 'Male',
    location: 'New York',
    photo: undefined,
  });
  console.log('User data created.');
  await syncDatabase(); // Ensure database is synced after creating initial data
}

initializeDatabase().catch((err) => {
  console.error('Error initializing database:', err);
});


