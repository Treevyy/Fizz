import express, { Request, Response } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

interface User {
    id: number;
    name: string;
    inter: string[];
}

// dummy data
const users: User[] = [
    { id: 1, name: 'Alice', inter: ['coding', 'running'] },
    { id: 2, name: 'Bob', inter: ['music', 'cycling'] },
    { id: 3, name: 'Charlie', inter: ['gaming', 'reading'] },
  ];

  app.get('/api/match', authenticateToken, (req: Request, res: Response) => {
    
    const currentUser = req.body.user as User;
  
    if (!currentUser || !currentUser.name || !Array.isArray(currentUser.inter)) {
      return res.status(400).json({ error: 'Invalid user data' });
    }
  
    
    const matches = users.filter((user) => user.id !== currentUser.id);
  
    res.json({ user: currentUser, matches });
  });

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});