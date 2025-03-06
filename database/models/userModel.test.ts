import { Sequelize } from 'sequelize';
import userModel from './userModel';

describe('User Model', () => {
  let sequelize: Sequelize;

  let User: ReturnType<typeof userModel>;

  beforeAll(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      
    });
    // Initialize the User model
    User = userModel(sequelize);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it('should create the User table', async () => {
    const tables = await sequelize.getQueryInterface().showAllTables();
    expect(tables).toContain('Users');
  });
});