import{ Router } from 'express'; 
import  db from '../../database/models/db'; 
import User from '../../database/models/db';

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