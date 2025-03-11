// import Matches from "./matches";
import user from "./userModel.js";
import Questionnaire from "./questionaire.js";

user.hasMany(Questionnaire, {foreignKey: 'userid',});
Questionnaire.belongsTo(user, {foreignKey: 'userid', as: 'user'});

export { user, Questionnaire };