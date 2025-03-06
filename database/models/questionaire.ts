import { Sequelize, DataTypes, Model, Optional } from 'sequelize';


interface QuestionnaireAttributes {
  id?: number;
  title: string;
  description?: string;
  questions: any;
}

interface QuestionnaireCreationAttributes extends Optional<QuestionnaireAttributes, 'id'> { }

class Questionnaire extends Model<QuestionnaireAttributes, QuestionnaireCreationAttributes>
  implements QuestionnaireAttributes {
  public id!: number;
  public title!: string;
  public description?: string;
  public questions: any;

  public static initialize(sequelize: Sequelize): void {
    Questionnaire.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        questions: {
          type: DataTypes.JSON,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'questionnaires',
      }
    );
  }
}


export default Questionnaire;
export type { QuestionnaireAttributes };