import * as Survey from "survey-react";
// import "../styles/Survey.css";
import styled from "styled-components";



const SurveyContainer = styled.div`
  background-color: black;
  color: white;
  font-family: "Arial", sans-serif;
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(255, 64, 129, 0.3);
  text-align: center;
`;

const Button = styled.button`
  color: white;
  `;

const SurveyTitle = styled.h1`
  font-size: 0px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin-bottom: 0px;
`;

const StyledSurvey = styled(Survey.Survey)`
  .sv-container { background: #111; padding: 20px; border-radius: 8px; }
  .sv-title { color: #ff4081; }
  .sv-question { color: white; }
  .sv-radio__label {
    background: #222;
    color: white;
    border: 2px solid #ff4081;
    padding: 10px;
    border-radius: 8px;
    transition: all 0.3s;
  }
  
  .sv-radio__label:hover,
  input:checked + .sv-radio__label {
    background-color: #ff4081;
    color: white;
    padding: 0px;
    cursor: pointer;
  }
  .sv-complete-btn {
    background-color: #ff4081;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s;
  }
  .sv-complete-btn:hover {
    background-color: #e5005a;
  }
  .sd-selectbase__label{
    font-size: 1rem;
    text-align: left;
    padding: 0;

  }
`;
const surveyJSON = {
  title: "Dating Profile Questionnaire",
  showProgressBar: "top",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "perfect_weekend",
          title: "What’s your idea of a perfect weekend?",
          choices: [
            { value: "nature_hiking", text: "Exploring nature and hiking" },
            { value: "relaxing_home", text: "Relaxing at home with a good book or movie" },
            { value: "friends_partying", text: "Going out with friends and partying" },
            { value: "museums_events", text: "Visiting museums, galleries, or attending events" }
          ]
        }
      ]
    },
    {
      name: "page2",
      elements: [
        {
          type: "radiogroup",
          name: "communication_style",
          title: "How do you prefer to communicate with your partner?",
          choices: [
            { value: "text_messages", text: "Through text messages" },
            { value: "phone_calls", text: "Phone calls" },
            { value: "video_chats", text: "Video chats" },
            { value: "in_person", text: "In person, face-to-face" }
          ]
        }
      ]
    },
    {
      name: "page3",
      elements: [
        {
          type: "radiogroup",
          name: "ideal_vacation",
          title: "Which best describes your ideal vacation?",
          choices: [
            { value: "beach_resort", text: "A beach resort with a laid-back vibe" },
            { value: "adventurous_trip", text: "An adventurous trip like hiking or mountain climbing" },
            { value: "cultural_tour", text: "A cultural city tour with museums and architecture" },
            { value: "road_trip", text: "A spontaneous road trip with no set plans" }
          ]
        }
      ]
    },
    {
      name: "page4",
      elements: [
        {
          type: "radiogroup",
          name: "comfort_food",
          title: "What is your go-to comfort food?",
          choices: [
            { value: "pizza", text: "Pizza" },
            { value: "ice_cream", text: "Ice cream" },
            { value: "sushi", text: "Sushi" },
            { value: "home_cooked", text: "A home-cooked meal" }
          ]
        }
      ]
    },
    {
      name: "page5",
      elements: [
        {
          type: "radiogroup",
          name: "evening_preference",
          title: "How do you prefer to spend your evenings?",
          choices: [
            { value: "watching_tv", text: "Watching TV or movies" },
            { value: "cooking_dinner", text: "Cooking and enjoying dinner with loved ones" },
            { value: "socializing", text: "Going to social events or hanging out with friends" },
            { value: "hobbies_projects", text: "Getting creative with hobbies or personal projects" }
          ]
        }
      ]
    },
    {
      name: "page6",
      elements: [
        {
          type: "radiogroup",
          name: "spending_time_with_partner",
          title: "What’s your favorite way to spend time together with a partner?",
          choices: [
            { value: "romantic_walks", text: "Going on romantic walks or hikes" },
            { value: "cozy_night_in", text: "Staying in, cooking together, and enjoying a cozy night" },
            { value: "attending_events", text: "Attending events, concerts, or sports games" },
            { value: "traveling_exploring", text: "Traveling and exploring new places" }
          ]
        }
      ]
    },
    {
      name: "page7",
      elements: [
        {
          type: "radiogroup",
          name: "pets_preference",
          title: "How do you feel about pets?",
          choices: [
            { value: "love_pets", text: "I love animals and have pets" },
            { value: "like_pets", text: "I like animals but don’t have pets" },
            { value: "indifferent_pets", text: "I’m indifferent, but I can tolerate them" },
            { value: "no_pets", text: "I’m not a fan of pets" }
          ]
        }
      ]
    },
    {
      name: "page8",
      elements: [
        {
          type: "radiogroup",
          name: "conflict_resolution",
          title: "How do you handle conflicts in a relationship?",
          choices: [
            { value: "talk_it_out", text: "I prefer to talk it out calmly and resolve it quickly" },
            { value: "space_first", text: "I tend to need some space before I’m ready to talk" },
            { value: "get_upset", text: "I might get upset, but eventually, I like to work things out" },
            { value: "avoid_conflict", text: "I try to avoid conflict as much as possible" }
          ]
        }
      ]
    },
    {
      name: "page9",
      elements: [
        {
          type: "radiogroup",
          name: "work_life_balance",
          title: "Which of the following best describes your work-life balance?",
          choices: [
            { value: "career_focused", text: "I’m very career-focused and spend a lot of time working" },
            { value: "balanced", text: "I try to balance work and personal life equally" },
            { value: "personal_life_priority", text: "I prioritize my personal life and try not to overwork" },
            { value: "flexible_schedule", text: "I prefer to have flexible hours and enjoy a more relaxed schedule" }
          ]
        }
      ]
    },
    {
      name: "page10",
      elements: [
        {
          type: "radiogroup",
          name: "social_life",
          title: "Which best describes your social life?",
          choices: [
            { value: "social_regularly", text: "I enjoy going out and socializing regularly" },
            { value: "small_gatherings", text: "I prefer small gatherings with close friends" },
            { value: "homebody", text: "I’m more of a homebody, rarely going out" },
            { value: "spontaneous", text: "I like to be spontaneous and meet new people whenever I can" }
          ]
        }
      ]
    }
  ]
};

const SurveyComponent = () => {
  const survey = new Survey.Model(surveyJSON);
  survey.onComplete.add((sender) => {
    console.log("Survey results: ", sender.data);
    // You can also send the data to your backend API here.
  });
  return (
    <SurveyContainer>
      <SurveyTitle>{surveyJSON.title}</SurveyTitle>
      <StyledSurvey model={survey} />
    </SurveyContainer>
  );
};

export default SurveyComponent;
