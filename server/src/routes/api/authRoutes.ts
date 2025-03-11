import express, { Request, Response, Router } from 'express'; // Import express and types for Request and Response
import bcrypt from 'bcryptjs'; // Import bcrypt for password hashing
import jwt from 'jsonwebtoken'; // Import jsonwebtoken for creating JWT tokens
import { user } from '../../database/models/index.js';
import dotenv from 'dotenv'; // Import dotenv for loading environment variables

dotenv.config(); 

const router =Router(); 

// POST /register - User registration endpoint
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password, age, gender, location, photo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({ username, email, password: hashedPassword, age, gender, location, photo });
    res.json({ success: true, newUser });
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  });


// POST /login - User login endpoint
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const loginUser = await user.findOne({ where: { email } });
    if (!loginUser || !(await bcrypt.compare(password, loginUser.dataValues.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: loginUser.dataValues.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    res.json({ success: true, token });
  } catch (error) {
    res.status(400).json({  error: (error as Error).message });
  }
});

router.get('/test', async (req: Request, res: Response) => {
const getAllUsers = await user.findAll();
res.json({ success: true, getAllUsers });
});
export default router; 