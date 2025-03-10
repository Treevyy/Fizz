import express, { Request, Response } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware';
import dotenv from 'dotenv';
import UserModel from '../../database/models/userModel';
import { Op } from 'sequelize';

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());

interface User {
  id: number;
  name: string;
  inter: string[];
}

const countMatchingAnswers = (answers1: string[], answers2: string[]): number => {
  return answers1.filter(answer => answers2.includes(answer)).length;
};

app.post('/api/match', authenticateToken, async (req: Request, res: Response) => {
  const currentUser = req.body.user as User;

  if (!currentUser || !currentUser.name || !Array.isArray(currentUser.inter)) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  try {
    const dbUsers = await UserModel.findAll({
      where: {
        id: { [Op.ne]: currentUser.id }
      }
    });
    const users: User[] = dbUsers.map(userInstance => {
      const userData = userInstance.toJSON() as User;
      return userData;
    });
    const matches = users.filter(user =>
      countMatchingAnswers(currentUser.inter, user.inter) >= 4
    );

    res.json({ user: currentUser, matches });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});