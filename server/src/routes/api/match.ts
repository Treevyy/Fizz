import express, { Request, Response } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware';
import dotenv from 'dotenv';
import UserModel from '../../database/models/userModel';
import { Op } from 'sequelize';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

interface Answers {
  title: string;
  answers: string[];
  userid: number;
}

const countMatchingAnswers = (answers1: string[], answers2: string[]): number => {
  return answers1.filter(answer => answers2.includes(answer)).length;
};

app.post('/api/match', authenticateToken, async (req: Request, res: Response) => {
  const currentUser = req.body.user as Answers;

  if (!currentUser || !currentUser.userid || !Array.isArray(currentUser.answers)) {
    return res.status(400).json({ error: 'Invalid user data' });
  }

  try {
    const dbUsers = await UserModel.findAll({});
    const users: Answers[] = dbUsers.map(userInstance => {
      const userData = userInstance.toJSON() as Answers;
      return userData;
    });
    const matches = users.filter(user =>
      countMatchingAnswers(currentUser.answers, user.answers) >= 4
    );

    res.json({ user: currentUser, matches });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});