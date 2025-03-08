import { Router } from 'express';
import bcrypt from 'bcryptjs'; 
import jwt from 'jsonwebtoken'; 
import  User  from '../../database/models/db'; 
import dotenv from 'dotenv';

dotenv.config(); 

const router =Router(); 

router.post('/register', async (req, res) => { 
  try {
    const { name, email, password, age, gender, location, photo } = req.body; 
    const hashedPassword = await bcrypt.hash(password, 10); 
    const user = await User.User.create({ name, email, password: hashedPassword, age, gender, location, photo }); 
    res.json({ success: true, user }); 
  } catch (error) {
    res.status(400).json({ error: (error as Error).message }); 
  }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    const user = await User.User.findOne({ where: { email } }); 
    if (!user || !(await bcrypt.compare(password, user.password))) { 
      return res.status(401).json({ error: 'Invalid credentials' }); 
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' }); 
    res.json({ success: true, token }); 
  }
);

export default router; 