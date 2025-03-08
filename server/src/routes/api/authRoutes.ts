import express, { Request, Response, Router } from 'express'; // Import express and types for Request and Response
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for creating JWT tokens
import db from '../../database/models/db';
import dotenv from 'dotenv'; // Import dotenv for loading environment variables

dotenv.config(); 

const router =Router(); 

// POST /register - User registration endpoint
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, age, gender, location, photo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({ name, email, password: hashedPassword, age, gender, location, photo });
    res.json({ success: true, user });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
});

// POST /login - User login endpoint
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await db.User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(400).json({  error: (error as Error).message });
  }
});

export default router; 