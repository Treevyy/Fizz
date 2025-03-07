
export { };

import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import db from "../models/db";

dotenv.config();

async function someAsyncFunction() {
  console.log(' powerwalking through some async function..');
}

async function syncDatabase() {
  await someAsyncFunction();
}

// Optionally, you can create some initial data here
async function initializeDatabase() {
  await db.User?.create({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: 'password123',
    age: 30,
    gender: 'Male',
    location: 'New York',
    photo: null,
  });
  console.log('User data created.');
  if (db.sequelize) {
    await db.sequelize?.sync({ force: true });
    console.log(' We have successfully fizzed up');
  } else {
    console.error('Sequelize instance is not defined');
  }
}

initializeDatabase().catch((err) => {
  console.error('Error initializing database:', err);
});


syncDatabase().catch((err) => {
  console.error('Error syncing database:', err);
});


