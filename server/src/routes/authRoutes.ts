import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import db from '../../../database/models/db';

//import  userModel  from '../../../database/models/userModel';

dotenv.config();

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password, age, gender, location, photo } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if(db.User){
    const newUser = await db.User.create({ name, email, password: hashedPassword, age, gender, location, photo });
    res.status(201).json(newUser);
    }else{
      res.status(500).json({ error: 'User model is not fizzy (defined)' });
    }  
  } catch (error) {
    res.status(500).json({ error: 'unsuccessfull fizzship(register)' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (db.User){
    const user = await db.User.findOne({ where: { email } }) as unknown as { password: string, id: number };
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
    res.json({ success: true, token });
  }else{
    res.status(500).json({ error: 'User model is not defined' });
  }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;