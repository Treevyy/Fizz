import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface MatchesAttributes {
  id?: number;
  userId: number;
  matchedUserId: number;
  matchedAt: Date;
}

interface MatchesCreationAttributes extends Optional<MatchesAttributes, 'id'> {}

class Matches extends Model<MatchesAttributes, MatchesCreationAttributes>
implements MatchesAttributes {
  public id!: number;
  public userId!: number;
  public matchedUserId!: number;
  public matchedAt!: Date;

  public static initialize(sequelize: Sequelize): void {
    Matches.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        matchedUserId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        matchedAt: {
          type: DataTypes.DATE,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: 'matches',
      }
    );
  }
}

export default Matches;
export type { MatchesAttributes };

  