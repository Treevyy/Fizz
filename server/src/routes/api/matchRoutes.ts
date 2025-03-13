import { Router } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware.js';
import UserModel from '../../database/models/userModel.js';
import { Op } from 'sequelize';

const router = Router();

interface Answers {
  title: string;
  answers: string[];
  userid: number;
}

const countMatchingAnswers = (answers1: string[], answers2: string[]): number => {
  return answers1.filter(answer => answers2.includes(answer)).length;
};

router.post("/", authenticateToken, async (req, res) => {
  const { userid, answers } = req.body;

  if (!userid || !Array.isArray(answers)) {
    return res.status(400).json({ error: "Invalid user data" });
  }

  try {
    const dbUsers = await UserModel.findAll();
    const users = dbUsers.map(userInstance => userInstance.toJSON());

    // Find matches based on at least 6 common answers
    const matches = users.filter(user => countMatchingAnswers(answers, user.answers) >= 6);

    res.json({ matches });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
