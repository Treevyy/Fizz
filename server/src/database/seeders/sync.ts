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
    await User.bulkCreate([
      {
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        password: hashedPassword,
        age: 30,
        gender: 'Male',
        location: 'New York',
        photo: null,
      },
      {
        username: 'JaneDoe',
        email: 'jane.doe@example.com',
        password: 'password',
        age: 28,
        gender: 'Female',
        location: 'Los Angeles',
        photo: null,
      },
      {
        username: 'AliceSmith',
        email: 'alice.smith@example.com',
        password: 'password',
        age: 25,
        gender: 'Female',
        location: 'Chicago',
        photo: null,
      },
      {
        username: 'BobJohnson',
        email: 'bob.johnson@example.com',
        password: 'password',
        age: 35,
        gender: 'Male',
        location: 'Houston',
    }
  ]);
  console.log('User data created.');
    process.exit(0)

    } catch (error) {
    console.error('Error syncing database:', error);
    process.exit(1)
  }
}

syncDatabase();

