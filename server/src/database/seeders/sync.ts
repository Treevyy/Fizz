import dotenv from 'dotenv';
import { Sequelize } from "sequelize";
import db from "../models/db";

dotenv.config();

async function syncDatabase() {
  try {

    await db.sequelize?.sync({ force: true });
    console.log(' We have successfully fizzed up');
    // test

    await db.User.create({
      name: 'JohnDoe',
      email: 'john.doe@example.com',
      password: 'password123',
      age: 30,
      gender: 'Male',
      location: 'New York',
      photo: null,
    });
    console.log('User data created.');
  } catch (error) {

    console.error('Error syncing database:', error);
  }
}
syncDatabase().catch((err) => {
  console.error('Error in syncDatabase:', err);
});
export default syncDatabase;