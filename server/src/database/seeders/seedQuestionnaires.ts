import Sequelize from '../models/database.js';
import Questionnaire from '../models/questionaire.js';


async function seedQuestionnaire() {
  try {
    await Sequelize.sync({ force: true });
    console.log('Database synced successfully.');
    
    const surveyAnswers = [
          {
            questionId: 1,
            answer: 'nature_hiking',
          },
          {
            questionId: 1,
            answer: 'relaxing_home',
          },
          {
            questionId: 1,
            answer: 'friends_partying',
          },
          {
            questionId: 1,
            answer: 'museums_events',
          },
          {
            questionId: 2,
            answer: 'text_messages',
          },
          {
            questionId: 2,
            answer: 'phone_calls',
          },
          {
            questionId: 2,
            answer: 'video_chats',
          },
          {
            questionId: 2,
            answer: 'in_person',
          },
          {
            questionId: 3,
            answer: 'beach_resort',
          },
          {
            questionId: 3,
            answer: 'adventurous_trip',
          },
          {
            questionId: 3,
            answer: 'cultural_tour',
          },
          {
            questionId: 3,
            answer: 'road_trip',
          },
          {
            questionId: 4,
            answer: 'pizza',
          },
          {
            questionId: 4,
            answer: 'ice_cream',
          },
          {
            questionId: 4,
            answer: 'sushi',
          },
          {
            questionId: 4,
            answer: 'home_cooked',
          },
          {
            questionId: 5,
            answer: 'watching_tv',
          },
          {
            questionId: 5,
            answer: 'cooking_dinner',
          },
          {
            questionId: 5,
            answer: 'socializing',
          },
          {
            questionId: 5,
            answer: 'hobbies_projects',
          },
          {
            questionId: 6,
            answer: 'romantic_walks',
          },
          {
            questionId: 6,
            answer: 'cozy_night_in',
          },
          {
            questionId: 6,
            answer: 'attending_events',
          },
          {
            questionId: 6,
            answer: 'traveling_exploring',
          },
        ];
    
        await Questionnaire.bulkCreate(surveyAnswers);

    console.log('Questionnaires seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding questionnaires:', error);
    process.exit(1);
  }
}

seedQuestionnaire();