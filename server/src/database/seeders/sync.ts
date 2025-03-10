import dotenv from 'dotenv';
import sequelize from "../models/database.js";
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';

dotenv.config();

async function syncDatabase() {
  try {

    await sequelize.sync({ force: true });
    console.log(' We have successfully fizzed up');
    // test
const hashedPassword = await bcrypt.hash("password", 10);
    await User.create({
      username: 'JohnDoe',
      email: 'john.doe@example.com',
      password: hashedPassword,
      age: 30,
      gender: 'Male',
      location: 'New York',
      photo: null,
    });
    console.log('User data created.');
    process.exit(0)

    } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1)
  }
}

syncDatabase();

