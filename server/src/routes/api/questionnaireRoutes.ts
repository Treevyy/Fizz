import express from 'express';
import  Questionnaire  from '../../../../database/models/questionaire';

const router = express.Router();

//retrieve api questionnaire

router.get('/:id', async (req, res) => {
try{
    const questionnaires = await Questionnaire.findAll();
    res.status (200).json(questionnaires);
} catch (error) {
    res.status (500).json({error: (error as Error).message});

 }
});

export default router;