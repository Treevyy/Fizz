import { Client } from 'pg';

const client = new Client({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export const connectDB = async () => {
  try {
    await client.connect();
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;