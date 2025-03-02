-- Drop existing tables if they exist
DROP TABLE IF EXISTS user_Data CASCADE;
DROP TABLE IF EXISTS interest_options CASCADE;
DROP TABLE IF EXISTS interest_Name CASCADE;

-- create User Data Table
CREATE TABLE user_Data(
    id Serial PRIMARY KEY,
    user_name VarChar(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    date_ofbirth VarChar(6) Not NULL,
    email_Address VARCHAR(30) NOT NULL
);

-- Create interest_options table
CREATE TABLE interest_Options(
    interest_id Serial Primary KEY,
    interest_name VARCHAR(30) NOT NULL
);

-- interest_Name table
 CREATE TABLE interest_Name(
    interest_id Serial PRIMARY KEY,
    user_id INTEGER REFERENCES user_Data(id),
    interest_options_id INTEGER REFERENCES interest_options(interest_id)
 );

-- Insert available interest options
 INSERT INTO interest_options (interest_name) VALUES
 ('Sports'),
 ('Music'),
 ('Reading'),
 ('Traveling'),
 ('Cooking');