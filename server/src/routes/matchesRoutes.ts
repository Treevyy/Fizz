import express from 'express';
import  Matches  from '../../../database/models/matches';
import  Questionnaire from '../../../database/models/questionaire';
import { QuestionnaireAttributes } from '../../../database/models/questionaire';


const router = express.Router();

// matches are created based on the questionnaire results
router.post('/', async (req, res) => {
    try{
        const { userId1, userId2 } =req.body;

 // gets the results from two users
 const questionnaire1 = await Questionnaire.findOne({ where: { userId: userId1 } }) as QuestionnaireAttributes | null;
 const questionnaire2 = await Questionnaire.findOne({ where: { userId: userId2 } }) as QuestionnaireAttributes | null;

 if (!questionnaire1 || !questionnaire2) {
   return res.status(404).json({ error: 'oops looks like it fizzled out. try again' });
 }

 // uses math to create a result 
 const matchScore = calculateMatchScore(questionnaire1.questions, questionnaire2.questions);

 // checking to see if the score meets the criteria for a match 3 or more out of 5 
 if (matchScore >= 3) {
    // this will create a new match
    const match = await Matches.create({userId1, userId2, matchScore});
    res.status(201).json(match);
 } else {
    res.status(200).json({message:' POP! No matches where found.  Try Again.'});
 }
} catch (error){
    res.status(400).json({ error: (error as any).message});
}
 });

// math function 
const calculateMatchScore = (questions1: any, questions2: any): number => {
// when i have the amount of questions i 
let score = 0;
// Example logic: Increase score for each matching answer
for (let i = 0; i < questions1.length; i++) {
 if (questions1[i] === questions2[i]) {
   score += 1;
 }
}

// gives user a compatibility score in percentage  
return (score / questions1.length) * 100; 
};

export default router;
    
