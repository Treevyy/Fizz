import { Router } from 'express';
const router = Router();

router.post('/survey', async (req, res) => {
  const surveyData = req.body;
  console.log("Received survey data:", surveyData);
  
  res.status(200).json({ message: "Survey data received successfully" });
});

export default router;