import { Router } from 'express';
import { readFile } from 'fs';
import { join } from 'path';

const router = Router();

// GET /api/survey - returns the survey questions
router.get('/', (req, res) => {
  // Adjust the path based on where your JSON file is located
  const filePath = join(__dirname, 'surveyQuestions.json');

  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading survey questions file:', err);
      return res.status(500).json({ message: 'Error retrieving survey questions' });
    }
    try {
      const surveyQuestions = JSON.parse(data);
      res.json(surveyQuestions);
    } catch (parseErr) {
      console.error('Error parsing survey questions:', parseErr);
      res.status(500).json({ message: 'Error parsing survey questions' });
    }
  });
});

export default router;

