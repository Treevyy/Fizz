import { Router } from 'express';
import User from '../../database/models/db.js';



const router = Router(); 

router.get('/', async (req, res) => { 
  try {
    const users = await User.User.findAll(); 
    res.json(users); 
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router; 