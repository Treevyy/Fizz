
export { };
;
import dotenv from 'dotenv';
import db from "../models";

dotenv.config();

async function someAsyncFunction() {
  console.log(' powerwalking through some async function..');
}

async function syncDatabase() {
  await someAsyncFunction();

if (db.sequelize) {
  await db.sequelize.sync({ force: true });
  console.log(' We have successfully fizzed up');

await db.User?.create({
  name: 'John Doe',
  email: 'john.doe@example.com',
  password: 'password123',
  age: 30,
  gender: 'Male',
  location: 'New York',
  photo: null,
});
console.log('User data created.') 
 } else {
    console.error('Sequelize instance is not defined');
  }
}

  syncDatabase().catch((err) => {
  console.error('Error syncing database:', err);
});


