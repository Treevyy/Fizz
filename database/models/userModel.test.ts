import { Sequelize } from 'sequelize';
import db from './db';

describe('User Model', () => {
  let sequelize: Sequelize;

  beforeAll(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      
    });
    
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